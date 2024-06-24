"use client"
import i18next from 'i18next';
import { z } from "zod";
import { zodI18nMap } from 'zod-i18n-map';
import translation from 'zod-i18n-map/locales/pt/zod.json';
 

/** 
 * definindo a linguagem da engine de validação dos formulários
 * */ 
i18next.init({
    lng: "pt",
    resources: {
        pt: { zod: translation },
    },
});
z.setErrorMap(zodI18nMap);


export const projetoSchema = z.object({
    titulo: z.string().min(15).max(255),
    objetivo: z.string().min(1).max(400),
    descricao: z.string().optional(),
    valorSolicitado: z.number().gt(0, {message: 
        "Valor deve ser maior que 0"
    }).refine((value) => {
        return value.toString().length < 11
    }
    , {
        message: "Valor deve ser menor que 11 dígitos"
    }),
    dataConclusao: z.date().optional(),
    area: z.string().min(1, { message: "Selecione uma área" }),
    subareas: z.array(z.string().min(1)).optional(),
    pesquisadorProjeto: z.array(z.object({
        id: z.string().min(1),
        pesquisador_id: z.string().min(1),
        cargo: z.string().min(1),
        horas: z.number().min(1),
    }).required()).optional(),
    agencias_fomento_ids : z.array(z.string().min(1)).optional(),
    // producoesAcademicas: z.array(z.object({
    //     titulo: z.string().min(1).max(255),
    //     descicao: z.string().max(400),
    //     tipo: z.string().max(255),
    // })),
    // valoresArrecadados: z.array(z.object({
    //     valor: z.number().min(0).max(11),
    //     descricao: z.string().min(1).max(400),
    //     data: z.string(),
    // })),
})

export type ProjetoSchema = z.infer<typeof projetoSchema>


/**
 * Função auxiliar para verificar se um campo é obrigatório
 */
export function isFieldRequired(schema: z.ZodObject<z.ZodRawShape>, fieldName: string): boolean {
    const shape = schema.shape;
    const field = shape[fieldName];
    
    if (field.isOptional() || field.isNullable()) {
        return false;
    }
    return true;
};