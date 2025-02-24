import { json } from '@sveltejs/kit';
import fs from 'fs/promises';

export async function GET() {
    try {
        const data = await fs.readFile('/home/a/an/animage/cal.moe/caa_next_event.json', 'utf-8');
        return json(JSON.parse(data));
    } catch (error) {
        return json({ error: 'Failed to load events' }, { status: 500 });
    }
}