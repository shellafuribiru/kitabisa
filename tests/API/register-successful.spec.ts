import { test , expect } from '@playwright/test';

test('test-api-002 - POST API Register Successful', async ({request}) => {
    const Response = await request.post('https://reqres.in/api/register', {
        data:{
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
    });
    console.log(await Response.json());
    expect(Response.ok()).toBeTruthy();
    expect(Response.status()).toBe(200);

    const Responsebody = await Response.json();
    expect(Responsebody).toHaveProperty("id");
    expect(Responsebody).toHaveProperty("token");
});