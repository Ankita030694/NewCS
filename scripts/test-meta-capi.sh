#!/bin/bash

# Usage: ./test-meta-capi.sh <test_event_code>

TEST_EVENT_CODE=$1

if [ -z "$TEST_EVENT_CODE" ]; then
    echo "Error: Please provide a test_event_code as an argument."
    echo "Usage: ./test-meta-capi.sh TEST12345"
    exit 1
fi

URL="http://localhost:3000/api/meta/capi"

echo "Sending Lead event to $URL with test_event_code: $TEST_EVENT_CODE"

curl -X POST "$URL" \
     -H "Content-Type: application/json" \
     -d "{
           \"email\": \"test@example.com\",
           \"phone\": \"1234567890\",
           \"eventName\": \"Lead\",
           \"testEventCode\": \"$TEST_EVENT_CODE\",
           \"eventSourceUrl\": \"http://localhost:3000/contact\",
           \"value\": 100,
           \"currency\": \"INR\"
         }"

echo -e "\n\nTest complete."
