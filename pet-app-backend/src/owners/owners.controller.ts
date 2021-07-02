import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { OwnerCreateDto } from './OwnerCreate.dto';
import { OwnersService } from './owners.service';
import { OwnerSearchDto } from './OwnerSearch.dto';
import { OwnerUpdateDto } from './OwnerUpdate.dto';

@Controller('owners')
export class OwnersController {

    constructor(private ownersService: OwnersService)
    { }

    @Get()
    getAllOwners(@Query() param:OwnerSearchDto){

        if(Object.keys(param).length){
        return this.ownersService.ownerSearch(param)
        }
        else{
        return this.ownersService.getAllOwners();
        }
    }

    @Post()
    @UsePipes(ValidationPipe)
    createOwner(@Body() ownerCreateDto: OwnerCreateDto){

        return this.ownersService.createOwner(ownerCreateDto);            

    }

    @Get('/:id')
    getOwnerById(@Param('id') id: string){
        return this.ownersService.getOwnerById(id);
    }

    @Put('/:id/address')
    updateOwer(@Param('id') id:string, @Body() ownerUpdatedto:OwnerUpdateDto){
        ownerUpdatedto.id = id;
        return this.ownersService.updateOwner(ownerUpdatedto);
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteOwner(@Param('id') id:string){
        if(!this.ownersService.deleteOwner(id)){
            throw new NotFoundException('The owner does not exist');
        }
    }
}
