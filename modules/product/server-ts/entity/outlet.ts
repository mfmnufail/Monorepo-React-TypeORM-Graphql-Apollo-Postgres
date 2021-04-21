import { Entity, Column, PrimaryColumn, BeforeInsert, BaseEntity, PrimaryGeneratedColumn } from '@voidpos/server';
import { v4 as uuidv4 } from 'uuid';

@Entity("outlets")
export class Outlet extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  postal_code: string;

  @Column()
  phone: string;

  @Column()
  taxrate_id: number;

  @Column()
  email: string;

  @Column()
  business_id: number;

  @Column()
  tax_rate: number;

  @Column()
  link_type: string;

  @Column()
  linked_outlets: string;

  @Column()
  copy_outlet: number;

  @BeforeInsert()
  addId(){
      this.id = uuidv4();
  }

}
