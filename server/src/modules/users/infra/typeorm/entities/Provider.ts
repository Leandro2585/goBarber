import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import User from './User';

@Entity('providers')
class Provider {
  @PrimaryColumn('uuid')
  provider_id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'provider_id' })
  user: User;

  @Column()
  address: string;

  @Column()
  whatsapp: number;

  @Column()
  work_routine: string;

  @Column()
  opening_hours: string;
}

export default Provider;
