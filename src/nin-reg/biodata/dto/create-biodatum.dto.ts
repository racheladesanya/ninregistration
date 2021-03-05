export class CreateBiodatumDto {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly dateOfBirth?: Date;
  readonly nationality: string;
  readonly countryOfBirth: string;
  readonly stateOfBirth?: string;
  readonly townOfBirth?: string;
  readonly address: string;
  readonly profession: string
  readonly isActive?: boolean;
}
