"""add column type in advisor table

Revision ID: 3c83f58a245e
Revises: c82cad68a40a
Create Date: 2023-02-11 02:48:27.408598

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3c83f58a245e'
down_revision = 'c82cad68a40a'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('advisor', schema=None) as batch_op:
        batch_op.add_column(sa.Column('type', sa.VARCHAR(length=20), nullable=False, comment='자문단 위원 유형'))

    with op.batch_alter_table('post', schema=None) as batch_op:
        batch_op.create_foreign_key(None, 'board', ['board_id'], ['id'])
        batch_op.create_foreign_key(None, 'user', ['author_name'], ['name'])

    with op.batch_alter_table('sponsor', schema=None) as batch_op:
        batch_op.create_foreign_key(None, 'user', ['user_id'], ['id'])

    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('sponsor', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')

    with op.batch_alter_table('post', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_constraint(None, type_='foreignkey')

    with op.batch_alter_table('advisor', schema=None) as batch_op:
        batch_op.drop_column('type')

    # ### end Alembic commands ###
