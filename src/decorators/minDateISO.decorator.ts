import {
  ValidationOptions,
  registerDecorator,
  ValidationArguments,
} from 'class-validator';

export function minDateISO(
  minDate: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'minDateISO',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [minDate],
      options: validationOptions,
      validator: {
        validate(value: string) {
          const currentDate = new Date(minDate);
          const min = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
          );
          const inputDate = new Date(value);

          return inputDate.getTime() >= min.getTime() ? true : false;
        },
        defaultMessage(args: ValidationArguments) {
          const [minDateValue] = args.constraints;
          return `A data de ${propertyName} deve ser igual ou posterior a ${minDateValue}.`;
        },
      },
    });
  };
}
