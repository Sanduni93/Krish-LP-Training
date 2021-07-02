import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { PetCreateDto } from './PetCreate.dto';
import { PetsService } from './pets.service';
import { PetSearchDto } from './PetSearch.dto';
import { PetUpdateDto } from './PetUpdate.dto';

@Controller('pets')
export class PetsController {

    constructor(private petsService: PetsService)
    {
       

    }

    @Get()
    getAllPets(@Query() param:PetSearchDto){

        if(Object.keys(param).length){
        return this.petsService.petSearch(param)
        }
        else{
        return this.petsService.getAllPets();
        }
    }

    @Post()
    @UsePipes(ValidationPipe)
    createPet(@Body() petCreateDto:PetCreateDto){

        return this.petsService.createPet(petCreateDto);         
    }

    @Get('/:id')
    getPetById(@Param('id') id: string){
        return this.petsService.getPetById(id);
    }

    @Put('/:id/vaccination')
    updatePet(@Param('id') id:string, @Body() petUpdatedto:PetUpdateDto){
        petUpdatedto.id = id;
        return this.petsService.updatePet(petUpdatedto);
    }

    @Delete('/:id')
    @HttpCode(204)
    deletePet(@Param('id') id:string){
        if(!this.petsService.deletePet(id)){
            throw new NotFoundException('The owner does not exist');
        }
    }
}
