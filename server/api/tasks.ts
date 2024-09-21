import { createError } from 'h3'
import { serverSupabaseUser, serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const user = await serverSupabaseUser(event)
    const client = await serverSupabaseClient(event)

    if (!user) {
        throw createError({ statusMessage: 'Unauthorized' })
    }

    const { data, error } = await client.from('tasks').select('id, title').eq("user", user.id).order('created_at')
    if (error) {
        throw createError({ statusMessage: error.message })
    }

    return data
})
