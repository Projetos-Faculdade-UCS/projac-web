import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormRequiredIndicator,
} from '@/shared/ui/form';
import { Control } from 'react-hook-form';
import { ProjetoSchema, projetoSchema } from '../../lib/schema';
import { DatePickerInput } from '../custom-inputs/date-picker';

type ResultadosProps = {
    control: Control<ProjetoSchema>;
};

export function Resultados({ control }: ResultadosProps) {
    return (
        <div className="grid gap-4 md:grid-cols-4 xl:col-span-4">
            {' '}
            <span className="text-lg font-medium xl:col-span-4">
                Resultados
            </span>
            <FormField
                control={control}
                name="dataConclusao"
                render={({ field }) => (
                    <FormItem className="flex flex-col justify-center xl:col-span-1">
                        <FormLabel>
                            Data de conclusão
                            <FormRequiredIndicator formSchema={projetoSchema} />
                        </FormLabel>
                        <FormControl>
                            <DatePickerInput {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}
