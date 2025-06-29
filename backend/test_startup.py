#!/usr/bin/env python3
"""
Simple test script to verify the FastAPI application can start properly.
Run this to test your configuration before deploying to Render.
"""

import os
import sys

def test_imports():
    """Test if all imports work correctly"""
    print("Testing imports...")
    try:
        from app.config import settings
        print("✅ Config loaded successfully")
        print(f"   Database URL: {settings.database_url[:30]}...")
        print(f"   Algorithm: {settings.algorithm}")
        print(f"   Token expire minutes: {settings.access_token_expire_minutes}")
    except Exception as e:
        print(f"❌ Config import failed: {e}")
        return False
    
    try:
        from app.main import app
        print("✅ FastAPI app created successfully")
    except Exception as e:
        print(f"❌ FastAPI app creation failed: {e}")
        return False
    
    return True

def test_environment_variables():
    """Test environment variable configuration"""
    print("\nTesting environment variables...")
    
    env_vars = [
        ("DATABASE_URL", "Database connection string"),
        ("SECRET_KEY", "JWT secret key"),
        ("ALGORITHM", "JWT algorithm"),
        ("ACCESS_TOKEN_EXPIRE_MINUTES", "Token expiration time"),
        ("PORT", "Server port (set by Render)")
    ]
    
    for var_name, description in env_vars:
        value = os.getenv(var_name)
        if value:
            print(f"✅ {var_name}: {description} = {value[:20]}...")
        else:
            print(f"⚠️  {var_name}: {description} = (using default)")

def test_health_endpoint():
    """Test if the health endpoint works"""
    print("\nTesting health endpoint...")
    try:
        from app.main import app
        from fastapi.testclient import TestClient
        
        client = TestClient(app)
        response = client.get("/health")
        
        if response.status_code == 200:
            print("✅ Health endpoint working")
            print(f"   Response: {response.json()}")
        else:
            print(f"❌ Health endpoint failed with status {response.status_code}")
            return False
    except ImportError:
        print("⚠️  TestClient not available (install with: pip install httpx)")
        return True  # Don't fail if optional dependency is missing
    except Exception as e:
        print(f"❌ Health endpoint test failed: {e}")
        return False
    
    return True

def main():
    """Run all tests"""
    print("🚀 Testing FastAPI Application Startup")
    print("=" * 50)
    
    tests = [
        test_imports,
        test_environment_variables,
        test_health_endpoint
    ]
    
    all_passed = True
    for test in tests:
        if not test():
            all_passed = False
    
    print("\n" + "=" * 50)
    if all_passed:
        print("🎉 All tests passed! Your application should deploy successfully.")
    else:
        print("❌ Some tests failed. Check the errors above before deploying.")
        sys.exit(1)

if __name__ == "__main__":
    # Add the backend directory to Python path
    backend_dir = os.path.dirname(os.path.abspath(__file__))
    if backend_dir not in sys.path:
        sys.path.insert(0, backend_dir)
    
    main() 