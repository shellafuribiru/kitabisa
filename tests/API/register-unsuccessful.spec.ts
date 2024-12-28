import { test , expect } from '@playwright/test';

// Test case: Validate unsuccessful registration due to missing password
test('test-api-003 - POST API Register Unsuccessful', async ({request}) => {
    // Send a POST request to the registration endpoint with incomplete data (missing password)
    const Response = await request.post('https://reqres.in/api/register', {
        data:{
            "email": "sydney@fife"
        }
    });

    // Log the response body for debugging purposes
    console.log(await Response.json());

    // Validate that the response status is 400 (Bad Request)
    expect(Response.status()).toBe(400);

    // Parse the JSON response body
    const Responsebody = await Response.json();

    // Validate the response contains the correct error message indicating the missing password
    expect(Responsebody).toHaveProperty("error","Missing password");
});