import {
  BeforeUpdate,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

export const dateTransformer = {
  to: (value: any) => value, // on writing to database without changes
  from: (value: Date | string) => new Date(value), // on reading from database
};
export abstract class TypeOrmBaseModel<T> {
  @BeforeUpdate()
  updateDates() {
    this.updatedAt = new Date();
  }

  @PrimaryColumn({
    type: 'uuid',
    default: () => `uuid_generate_v1mc()`,
  })
  id!: string;

  @CreateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'LOCALTIMESTAMP',
  })
  createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'LOCALTIMESTAMP',
  })
  updatedAt!: Date;

  @DeleteDateColumn({
    type: 'timestamp with time zone',
  })
  deletedAt?: Date;

  abstract toDomain(): T;
}
