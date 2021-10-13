import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Feature } from './features/entities/feature.entity';
import { FeaturesModule } from './features/features.module';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'secret123!',
      database: 'testorm',
      entities: [Feature, Product],
      synchronize: true,
    }),
    FeaturesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
