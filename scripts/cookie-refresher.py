import subprocess
import sys
import re

def install_requests_if_missing():
    try:
        import requests
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "requests"])
    finally:
        global requests
        import requests

install_requests_if_missing()
import requests

# -------------------------------
# Get CSRF token using a Session
# -------------------------------
def fetch_csrf_token(session):
    response = session.post(
        "https://auth.roblox.com/v2/logout",
        allow_redirects=False
    )
    if response.status_code == 403:
        return response.headers.get("x-csrf-token")
    return None

# -------------------------------
# Generate auth ticket
# -------------------------------
def generate_auth_ticket(session, csrf_token):
    response = session.post(
        "https://auth.roblox.com/v1/authentication-ticket",
        headers={
            "x-csrf-token": csrf_token,
            "referer": "https://www.roblox.com",
            "Content-Type": "application/json"
        }
    )
    response.raise_for_status()
    return response.headers.get("rbx-authentication-ticket")

# -------------------------------
# Redeem auth ticket
# -------------------------------
def redeem_auth_ticket(auth_ticket):
    response = requests.post(
        "https://auth.roblox.com/v1/authentication-ticket/redeem",
        json={"authenticationTicket": auth_ticket},
        headers={"RBXAuthenticationNegotiation": "1"}
    )
    response.raise_for_status()
    set_cookie = response.headers.get("set-cookie", "")
    match = re.search(r'(\.ROBLOSECURITY=[^;]+)', set_cookie)
    if match:
        return match.group(1)
    return None

# -------------------------------
# Main function
# -------------------------------
def main():
    roblosecurity_cookie = input("Enter your .ROBLOSECURITY cookie: ")
    session = requests.Session()
    session.cookies.set(".ROBLOSECURITY", roblosecurity_cookie, domain=".roblox.com")
    csrf_token = fetch_csrf_token(session)
    if not csrf_token:
        print("Earn Money")
        return
    auth_ticket = generate_auth_ticket(session, csrf_token)
    if not auth_ticket:
        print("Earn Money")
        return
    new_cookie = redeem_auth_ticket(auth_ticket)
    if new_cookie:
        print(f"Refreshed cookie: {new_cookie}")
    else:
        print("Earn Money")

if __name__ == "__main__":
    main()
