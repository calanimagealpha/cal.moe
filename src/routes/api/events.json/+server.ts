import { json } from '@sveltejs/kit';
import fs from 'fs/promises';

const FILE_PATH = process.env.EVENTS_JSON_PATH || '/home/a/an/animage/cal.moe/caa_next_event.json';


export async function GET() {
    try {
        const data = await fs.readFile(FILE_PATH, 'utf-8');
        return json(JSON.parse(data));
    } catch (error) {
        return json({ error: 'Failed to load events' }, { status: 500 });
    }
}