import { test , expect } from '@playwright/test';

// Test case: Validate PATCH API for updating user details
test('test-api-006 - POST API Patch User', async ({request}) => {
    // Send a PATCH request to update user details
    const Response = await request.patch('https://reqres.in/api/users/2', {
        data:{
            "name": "morpheus",
            "job": "zion resident"
        }
    });

    // Log the PATCH response body for debugging purposes
    console.log(await Response.json());

    // Validate that the PATCH request was successful
    expect(Response.ok()).toBeTruthy();
    expect(Response.status()).toBe(200);

    // Parse the response body
    const Responsebody = await Response.json();

    // Validate the response contains the updated properties
    expect(Responsebody).toHaveProperty("name","morpheus");
    expect(Responsebody).toHaveProperty("job","zion resident");
    expect(Responsebody).toHaveProperty("updatedAt");
});