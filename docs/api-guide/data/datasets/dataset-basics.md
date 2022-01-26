---
description: Create, explore and modify datasets
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dataset Basics

## Create a dataset

<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location --request POST 'api.clarifai.com/v2/datasets' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "datasets": [
        {
            "id": "dataset-1633032323",
            "name": "foo",
            "description": "This is the foo dataset",
            "metadata": {
                "lol": "hey"
            }
        }
    ]
}'
```

</TabItem>
</Tabs>

## List datasets
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location --request GET 'api.clarifai.com/v2/datasets?page=1&per_page=100' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json'
```
</TabItem>
</Tabs>


## Get datasets
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request GET 'api.clarifai.com/v2/datasets/{{dataset_id}}' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json'
```
</TabItem>
</Tabs>


## Update datasets
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location --request PATCH 'api.clarifai.com/v2/datasets' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "datasets": [
        {
            "id": "{{dataset_id}}",
            "name": "foo",
            "description": "This is the new foo dataset",
            "metadata": {
                "foo": "bar"
            }
        }
    ],
    "action": "overwrite"
}'
```
</TabItem>
</Tabs>

## Update datasets with default filter
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location --request PATCH 'api.clarifai.com/v2/datasets' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "datasets": [
        {
            "id": "{{dataset_id}}",
            "name": "foo",
            "description": "This is the new foo dataset",
            "metadata": {
                "foo": "bar"
            },
            "default_filter_id": "{{dataset_filter_id}}"
        }
    ],
    "action": "overwrite"
}'
```
</TabItem>
</Tabs>

## Delete datasets
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location --request DELETE 'api.clarifai.com/v2/datasets' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dataset_ids": ["{{dataset_id}}"]
}'
```
</TabItem>
</Tabs>