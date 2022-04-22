

{
    "entities": [{
        "id": "516266f7-57d5-4548-b173-0d15e6c3d350",
        "participants": [{
            "id": "9969ea3a-3338-4735-9af8-ce76b95baf62",
            "name": "+61416275769",
            "address": "tel:+61416275769",
            "startTime": "2022-04-22T08:29:54.319Z",
            "connectedTime": "2022-04-22T08:29:54.515Z",
            "purpose": "customer",
            "state": "connected",
            "direction": "inbound",
            "held": false,
            "wrapupRequired": false,
            "queue": {
                "id": "89bd592e-d324-4a0b-9088-09f2a9c26ae6",
                "selfUri": "/api/v2/routing/queues/89bd592e-d324-4a0b-9088-09f2a9c26ae6"
            },
            "attributes": {},
            "provider": "Edge",
            "externalContact": {
                "id": "2af2683c-e9f8-4cc7-b25f-016cb335b97a",
                "selfUri": "/api/v2/externalcontacts/contacts/2af2683c-e9f8-4cc7-b25f-016cb335b97a"
            },
            "muted": false,
            "confined": false,
            "recording": false,
            "recordingState": "none",
            "ani": "tel:+61416275769",
            "dnis": "tel:+61283677914"
        }, {
            "id": "0fe05fff-eb8e-4fc7-aed7-b5cd2e7fbe86",
            "name": "Sydney, Australia",
            "address": "sip:a74f8c98-59b3-4797-9227-6275a93dfb47@127.0.0.1;language=en-US;user=ivr",
            "startTime": "2022-04-22T08:29:54.342Z",
            "connectedTime": "2022-04-22T08:29:54.491Z",
            "endTime": "2022-04-22T08:29:58.242Z",
            "purpose": "ivr",
            "state": "terminated",
            "direction": "inbound",
            "disconnectType": "transfer",
            "held": false,
            "wrapupRequired": false,
            "attributes": {},
            "provider": "Edge",
            "peer": "c196b931-8621-41f4-9018-403ae4d2d8bc",
            "muted": false,
            "confined": false,
            "recording": false,
            "recordingState": "none",
            "ani": "tel:+61416275769",
            "dnis": "sip:a74f8c98-59b3-4797-9227-6275a93dfb47@127.0.0.1;language=en-US;user=ivr"
        }, {
            "id": "e00f85af-5612-4b81-a690-d8d5d348e8b5",
            "name": "BJW Test",
            "address": "sip:89bd592e-d324-4a0b-9088-09f2a9c26ae6@127.0.0.1;language=en-AU;user=acd",
            "startTime": "2022-04-22T08:29:58.251Z",
            "connectedTime": "2022-04-22T08:29:58.411Z",
            "endTime": "2022-04-22T08:30:01.479Z",
            "purpose": "acd",
            "state": "terminated",
            "direction": "inbound",
            "disconnectType": "transfer",
            "held": false,
            "wrapupRequired": false,
            "queue": {
                "id": "89bd592e-d324-4a0b-9088-09f2a9c26ae6",
                "selfUri": "/api/v2/routing/queues/89bd592e-d324-4a0b-9088-09f2a9c26ae6"
            },
            "attributes": {},
            "provider": "Edge",
            "peer": "c196b931-8621-41f4-9018-403ae4d2d8bc",
            "conversationRoutingData": {
                "queue": {
                    "id": "89bd592e-d324-4a0b-9088-09f2a9c26ae6",
                    "selfUri": "/api/v2/routing/queues/89bd592e-d324-4a0b-9088-09f2a9c26ae6"
                },
                "priority": 0,
                "skills": [],
                "scoredAgents": []
            },
            "muted": false,
            "confined": false,
            "recording": false,
            "recordingState": "none",
            "ani": "tel:+61416275769",
            "dnis": "sip:89bd592e-d324-4a0b-9088-09f2a9c26ae6@127.0.0.1;language=en-AU;user=acd"
        }, {
            "id": "e449ce89-1ded-4136-9420-d3f1eaa2f424",
            "address": "sip:623a4ae97b884f1b406deb47+secureco.orgspan.com;tgrp=b785b8af-9cfc-4c57-92c9-cccf892bef4b;trunk-context=secureCo@localhost",
            "startTime": "2022-04-22T08:29:58.726Z",
            "connectedTime": "2022-04-22T08:30:01.437Z",
            "purpose": "agent",
            "state": "connected",
            "direction": "inbound",
            "held": false,
            "wrapupRequired": true,
            "wrapupPrompt": "optional",
            "user": {
                "id": "c25cd065-8a05-445c-b3ce-f86a24b689c6",
                "selfUri": "/api/v2/users/c25cd065-8a05-445c-b3ce-f86a24b689c6"
            },
            "queue": {
                "id": "89bd592e-d324-4a0b-9088-09f2a9c26ae6",
                "selfUri": "/api/v2/routing/queues/89bd592e-d324-4a0b-9088-09f2a9c26ae6"
            },
            "attributes": {},
            "alertingTimeoutMs": 8000,
            "provider": "Edge",
            "peer": "c196b931-8621-41f4-9018-403ae4d2d8bc",
            "muted": false,
            "confined": false,
            "recording": false,
            "recordingState": "none",
            "ani": "sip:+61416275769@10.47.1.31;user=phone",
            "dnis": "sip:623a4ae97b884f1b406deb47+secureco.orgspan.com;tgrp=b785b8af-9cfc-4c57-92c9-cccf892bef4b;trunk-context=secureCo@localhost"
        }],
        "otherMediaUris": [],
        "recordingState": "none",
        "selfUri": "/api/v2/conversations/calls/516266f7-57d5-4548-b173-0d15e6c3d350"
    }],
    "pageSize": 1,
    "pageNumber": 1,
    "total": 1,
    "lastUri": "/api/v2/conversations/calls?pageSize=1&pageNumber=1",
    "firstUri": "/api/v2/conversations/calls?pageSize=1&pageNumber=1",
    "selfUri": "/api/v2/conversations/calls?pageSize=1&pageNumber=1",
    "pageCount": 1
}