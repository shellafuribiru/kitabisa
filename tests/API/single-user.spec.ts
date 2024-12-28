import { test , expect } from '@playwright/test';

// Test case: Validate GET API response for a single user
test('test-api-001 - GET API Single User', async ({request}) => {
    // Send a GET request to retrieve details of a specific user (user ID: 2)
    const Response = await request.get('https://reqres.in/api/users/2');

    // Log the response body for debugging purposes
    console.log (await Response.json());

    // Validate the response status
    expect(Response.ok()).toBeTruthy();
    expect(Response.status()).toBe(200);
    
    // Parse the JSON response body
    const Responsebody = await Response.json();

    // Validate user data fields
    expect(Responsebody.data).toHaveProperty("id",2);
    expect(typeof Responsebody.data.id).toBe('number'); //assert data type
    expect(Responsebody.data).toHaveProperty("email","janet.weaver@reqres.in");

    // Validate email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(Responsebody.data.email).toMatch(emailRegex);
    console.log(`The email "${Responsebody.data.email}" is in the correct format.`);

    // Validate additional user details
    expect(Responsebody.data).toHaveProperty("first_name","Janet");
    expect(Responsebody.data).toHaveProperty("last_name","Weaver");
    expect(Responsebody.data).toHaveProperty("avatar","https://reqres.in/img/faces/2-image.jpg");

    // Validate support details
    expect(Responsebody.support).toHaveProperty("url","https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral");
    expect(Responsebody.support).toHaveProperty("text","Tired of writing endless social media content? Let Content Caddy generate it for you.");
});