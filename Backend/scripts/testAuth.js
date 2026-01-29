// Test script to verify dummy user authentication
const BASE_URL = 'http://localhost:5000';

async function testLogin() {
  try {
    console.log('🧪 Testing login for dummy user...\n');

    const response = await fetch(`${BASE_URL}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'sanay0203@demo.com',
        password: 'sanay0203'
      })
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✅ Login successful!');
      console.log('-----------------------------------');
      console.log('User:', data.data.name);
      console.log('Email:', data.data.email);
      console.log('User ID:', data.data._id);
      console.log('Token:', data.data.token.substring(0, 20) + '...');
      console.log('-----------------------------------\n');

      // Test protected route
      await testProtectedRoute(data.data.token);
    } else {
      console.error('❌ Login failed:', data.message);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

async function testProtectedRoute(token) {
  try {
    console.log('🧪 Testing protected route (Get Profile)...\n');

    const response = await fetch(`${BASE_URL}/api/users/profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✅ Protected route access successful!');
      console.log('-----------------------------------');
      console.log('Profile Data:', JSON.stringify(data.data, null, 2));
      console.log('-----------------------------------');
    } else {
      console.error('❌ Protected route access failed:', data.message);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testLogin();
