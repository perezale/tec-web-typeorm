import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
import { Feature } from './entities/feature.entity';

@Injectable()
export class FeaturesService {
  constructor(
    @InjectRepository(Feature)
    private featureRepository: Repository<Feature>,
  ) {}

  async findAll(): Promise<Feature[]> {
    const features = this.featureRepository.find({
      relations: ['products'],
    });
    return features;
  }

  create(createFeatureDto: CreateFeatureDto) {
    return 'This action adds a new feature';
  }

  findOne(id: number) {
    return `This action returns a #${id} feature`;
  }

  update(id: number, updateFeatureDto: UpdateFeatureDto) {
    return `This action updates a #${id} feature`;
  }

  remove(id: number) {
    return `This action removes a #${id} feature`;
  }
}
