from fastapi import APIRouter, HTTPException, Depends, File,  UploadFile, status
from sqlalchemy.orm import Session
from app.database import crud, schemas_v2, models
from app.database.database import get_db
from app.utils.oauth2 import get_current_user
from app.utils.aws_s3 import upload_file, delete_file
from typing import List

router = APIRouter(
    prefix="/popup",
)


@router.post("", status_code=status.HTTP_204_NO_CONTENT)
async def create_popup(popup_create: schemas_v2.PopupCreate = Depends(schemas_v2.PopupCreate), file: UploadFile = File(...), current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if not current_user.is_admin:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="You do not have permission to create popup"
        )

    image_filename = upload_file(file, "upload")

    crud.create_popup(
        db=db,
        popup_create=popup_create,
        image_filename=image_filename
    )


@router.get("/all", response_model=schemas_v2.PopupList)
async def get_popups(skip: int = 0, limit: int = 40, db: Session = Depends(get_db), ):
    db_popups = db.query(models.Popup).order_by(
        models.Popup.id.desc())

    return schemas_v2.PopupList(
        total=db_popups.count(),
        items=db_popups.offset(skip).limit(limit).all()
    )


@router.get("/all/active", response_model=schemas_v2.PopupList)
async def get_active_popups(db: Session = Depends(get_db), ):
    return crud.get_active_popups(db=db)


@router.get("/{popup_id}", response_model=schemas_v2.Popup)
async def get_popup(popup_id: int, db: Session = Depends(get_db)):
    db_popup = crud.get_popup(db=db, popup_id=popup_id)
    if not db_popup:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="not found"
        )
    return db_popup


@router.put("/{popup_id}", status_code=status.HTTP_204_NO_CONTENT)
async def update_popup(popup_id: int, popup_update: schemas_v2.PopupUpdate, current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if not current_user.is_admin:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="You do not have permission to edit this popup"
        )

    db_popup = crud.get_popup(db=db, popup_id=popup_id)
    if not db_popup:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="not found"
        )

    crud.update_popup_content(
        db=db,
        popup_id=popup_id,
        popup_update=popup_update
    )


@router.delete("/{popup_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_popup(popup_id: int, db: Session = Depends(get_db)):
    db_popup = crud.get_popup(db=db, popup_id=popup_id)
    if not db_popup:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="not found"
        )

    if db_popup.image_filename:
        delete_file(db_popup.image_filename, "popup")

    crud.delete_popup(db=db, popup_id=popup_id)
