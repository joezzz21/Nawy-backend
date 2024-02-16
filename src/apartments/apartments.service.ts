import { Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';

@Injectable()
export class ApartmentsService {
  private apartments = [
    {id: 0, description: "Cozy Apartment", location: "Madinaty", price: 2000000, beds: 2, size: 148},
    {id: 1, description: "Wonderful Apartment", location: "Rehab", price: 2500000, beds:4, size: 160},
  ];
  create(createApartmentDto: CreateApartmentDto) {
    const id = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    const new_apartment = {
      id: id,
      ...createApartmentDto
    }
    this.apartments.push(new_apartment)
    return new_apartment
  }

  findAll() {
    return this.apartments;
  }

  findOne(id: number) {
    const apartment =  this.apartments.find((apartment) => apartment.id === id);

    if(!apartment){
      throw new Error("Apartment not found");
    }

    return apartment;
  }

}
