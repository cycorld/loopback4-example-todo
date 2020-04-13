import {Model, model, property} from '@loopback/repository';

@model()
export class Extras extends Model {
  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  description?: string;


  constructor(data?: Partial<Extras>) {
    super(data);
  }
}

export interface ExtrasRelations {
  // describe navigational properties here
}

export type ExtrasWithRelations = Extras & ExtrasRelations;
