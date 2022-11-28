import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { TransformInterceptor } from '../utils';

@UseInterceptors(TransformInterceptor)
@Controller('dashboard')
export class DashboardController {
  @Get()
  getDataDashBoard() {
    const data = {
      sucursales_con_totem: 2345,
      sucursales_moviles: 1567,
      sucursales_activas: 4563,
      sucursales_desactividas: 5689,
      sucursales_creadas: 4,
      sucursales_editadas: 12,
    };
    return data;
  }
}
