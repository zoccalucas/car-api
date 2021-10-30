import { ISpecificationsParams } from "../interfaces/ISpecifications";
import { Specification } from "../entities/Specification";

export interface ISpecificationsRepository {
  create({name, description}: ISpecificationsParams): void;
  list(): Specification[];
  findByName(name: string): Specification;
}
