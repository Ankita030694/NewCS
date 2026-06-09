import os
import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Initialize Firebase Admin using credentials from environment
project_id = "credsettlee"
client_email = "firebase-adminsdk-fbsvc@credsettlee.iam.gserviceaccount.com"
private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCIKkdVML/4oQm0\nIuS8XggiNEwjZ+9eO3ufNp2mV9lRIPeXc0McxzSlHyoR/Q2WmkYZVckSv7UziB/G\nYsAp6Q+8H5m2D+QlTv0oGJaKh3F1YYZDZUcZH7ai0Yj3lLv8AepHi+cPRRevP2q1\n1sB0gWjBgestQnlkp1jdUQlQ78l1WgtuCrXrNQl6b/9knKYpr7aLR+El+iiySiIL\nQRLx2XKo2OOcB7uEk3yDsdbYZEpdlh/GnUz6qA4Mj+2QEgAgETZDftchc5x/VHr/\nSvfF3VZvDShL8OHpoTzC1reKa9LC4lhyUpBbgr0L3PLqz6JwSCptpIBvG6zuQmKB\nqONddc+nAgMBAAECggEAG+SVQjU/Tf4nD7iKJLAaeG9AHYyf8yy6MS4t8zJRuRXI\nwkSBPfbsqNqOcqrkyrIFpBD3pJiS1OCQqcH23V75sy7B/RKaSK46m6kVxYDjVAlL\nSKkJfHMLpaTIqvbT31bBGDDnfzBHHsYd5Ov99p+/xswHUfkpBt5lDMkZ4HOOUDR6\nWmEumTk7CIVpBNDlY+8KvEVBa2I/49NNLjQ9i+YHSqQ0GD7T7zYY2K05snq0ANCY\nJafDWz50eYXhS3LleLwa1kDhulIFiArMDVYWmwaGvQFqwgabOOUY3K7d8L2iw2P3\nNdCxCAanEHT4Pq+odAQtyGdRf/fcml/vN0GlKwVXyQKBgQC+wzUvj/YBZrQxlGvb\ngpulztusqq/hdnnFYDGR4qgQaHODBXg4RxZwbjwGbYl7RBDINgWIH0hrCC7KPkZf\n5Hjj2IlCYyo93Q2hfbFUghNIP2eg3Qy9Q1KFK7HPmy4A09Qg0huH9GRamQsVsDvX\n8xO1iVFt95DRJIn3HsAkeIohiwKBgQC2uzQ9kA0fkx/eBHqpHRtMffQAJPPVbdP3\nROtkdA5yKUtLy2IHp2WD3CNB+nR53vLppZvF8ZeqpSSAmSqqtWpMO48zUQHr22HB\nCc5/c4QnQGe7MmDs4fLskWjbDSsuHMTUJcaCmgnnILo+VY/IqihGgVX91DXbiRrN\nwloGo0aV1QKBgQC0rf3dG7R85UL8xsBVu+IibMgCRfSqTuXNPWwV6iEW0We/DFou\nq54kRTSTPgJ+fxyKFSiuIjscLTbsFYngX2zlGX4AJB6pU4sKjxt7mGwc/PjxEw1y\n4aXyPk1+/lLXM8tyfq7W2XKHoPcvxqkXw8LCKdq3lklS3hHSvwxsPsNOOwKBgFkA\nq7xEmq/DaGUqR1hxrec+/gbH+N/+45xvvDusb5DZXixnvrK9rSthoOa1B+CIYEa/\nfDUYrGfYkgP1FpwZStIgvGohTc9EhsOQdD0N1dOMgjnimuUmVL03QhxXuK14I8K1\nN5BLWQFzpmNQJ310q7NTsb+1ihoJGL4ZqOHMy0eVAoGAU21asKRK4F6KNyB/O152\nMSr+crrCF6Ox+GSkaLq7nAYAxfhFtKBg/Orkfm40tXn+p+vu0VhXH7LGFbqx0Sh8\nlV2aTkadEV8+h0lahQ0POh37uL0s4DYxvglXhn1X055yYnc2E8nHOdfmSCNlgJp6\n/GmnD8hkgsh0ldgwx/a9TSw=\n-----END PRIVATE KEY-----\n".replace('\\n', '\n')

cred = credentials.Certificate({
    "project_id": project_id,
    "client_email": client_email,
    "private_key": private_key
})

firebase_admin.initialize_app(cred)
db = firestore.client()

blogs_ref = db.collection('blogs')
docs = blogs_ref.stream()

print("LISTING ALL BLOGS FROM FIRESTORE:")
for doc in docs:
    data = doc.to_dict()
    print("-" * 50)
    print(f"ID: {doc.id}")
    print(f"Title: {data.get('title')}")
    print(f"Slug: {data.get('slug')}")
