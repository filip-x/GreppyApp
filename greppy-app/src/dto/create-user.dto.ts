import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

export class CreateUserDto {
  @ApiModelProperty()
  firstName: string;
  @ApiModelProperty()
  lastName: string;
  @ApiModelProperty()
  age: number;


}
