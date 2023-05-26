import { Test, TestingModule } from '@nestjs/testing';
import { OrderServices } from './order.service';

describe('OrderServiceService', () => {
  let service: OrderServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderServices],
    }).compile();

    service = module.get<OrderServices>(OrderServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
