import { z } from "zod";

export const transactionSchema = z.object({
    id: z.number(),
    date: z.string().optional(),
    time: z.string(),
    status: z.string(),
    count: z.number()
});

export const transactionSchemaRequest = transactionSchema.omit({
    id: true
})

export const avgGraphSchema = z.object({
    id: z.number(),
    time: z.string(),
    status: z.string(),
    total_count: z.number(),
    avg: z.number(),
    avg_graph: z.number(),
})

export const graphSchema = z.object({
    id: z.number(),
    avg_graph: z.array(avgGraphSchema),
    date_start: z.date().optional(),
    date_finish: z.date().optional(),
    is_base: z.boolean().default(false)
})

export const graphSchemaRequest = graphSchema.omit({
    id: true
})

export type TTransaction = z.infer<typeof transactionSchema>
export type TTransactionRequest = z.infer<typeof transactionSchemaRequest>
export type TGraph = z.infer<typeof graphSchema>
export type TGraphRequest = z.infer<typeof graphSchemaRequest>