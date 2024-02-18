import { Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';

@Injectable()
export class ApartmentsService {
  private apartments = [
    {id: 1, title: "Cozy Apartment", location: "Willow Grove", price: 2000000, beds: 3, size: 148},
    {id: 2, title: "Studio", location: "Harborview Heights", price: 350000, beds:2, size: 160},
    {id: 3, title: "Villa 2B", location: "Maplewood Meadows", price: 789000, beds:5, size: 240},
    {id: 4, title: "Amazing apartment", location: "Lakeside Haven", price: 12000, beds:2, size: 135},
    {id: 5, title: "Sunny Residence", location: "Oakwood Terrace", price: 890000, beds:7, size: 340},
    {id: 6, title: "Luxurious Oasis", location: "Pinecrest Park", price: 560000, beds:4, size: 210},
    {id: 7, title: "Modern Dwelling", location: "Sunset Ridge", price: 530000, beds:3, size:190},
    {id: 8, title: "Charming Nest", location: "Riverside Plaza", price: 760000, beds:1, size: 100},
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
