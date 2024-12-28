import { test , expect } from '@playwright/test';

// Test case: Validate successful login using POST AP
test('test-api-004 - POST API Login Successful', async ({request}) => {
    const Response = await request.post('https://reqres.in/api/login', {
        data:{
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
    });

    // Log the response body for debugging purposes
    console.log(await Response.json());

    // Ensure the response status is successful (HTTP 200)
    expect(Response.ok()).toBeTruthy();
    expect(Response.status()).toBe(200);

    // Parse the JSON response body
    const Responsebody = await Response.json();

    // Validate the response contains the 'token' property (indicating successful login)
    expect(Responsebody).toHaveProperty("token");
});