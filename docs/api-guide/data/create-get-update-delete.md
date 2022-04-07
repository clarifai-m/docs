---
description: Manage the data in your app.
sidebar_position: 3
---

# Adding and Removing Data

**Manage the data in your app**
<hr />


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonAddInputsViaURL from "!!raw-loader!../../../code_snippets/api-guide/data/add_inputs_via_url.py";
import PythonAddInputsViaBytes from "!!raw-loader!../../../code_snippets/api-guide/data/add_inputs_via_bytes.py";
import PythonAddMultipleInputsIds from "!!raw-loader!../../../code_snippets/api-guide/data/add_multiple_inputs_with_ids.py";
import PythonAddInputsConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/add_inputs_with_concepts.py";
import PythonAddInputsCustomMetadata from "!!raw-loader!../../../code_snippets/api-guide/data/add_inputs_custom_metadata.py";
import PythonListAllInputs from "!!raw-loader!../../../code_snippets/api-guide/data/list_all_inputs.py";
import PythonListInputsStreaming from "!!raw-loader!../../../code_snippets/api-guide/data/list_inputs_streaming.py";
import PythonGetInputId from "!!raw-loader!../../../code_snippets/api-guide/data/get_input_by_id.py";
import PythonGetInputsStatus from "!!raw-loader!../../../code_snippets/api-guide/data/get_inputs_status.py";
import PythonUpdateInputConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/update_input_concepts.py";
import PythonBulkUpdateInputsConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/bulk_update_inputs_concepts.py";
import PythonDeleteConceptsInput from "!!raw-loader!../../../code_snippets/api-guide/data/delete_concepts_input.py";
import PythonBulkDeleteConceptsInputs from "!!raw-loader!../../../code_snippets/api-guide/data/bulk_delete_concepts_inputs.py";
import PythonDeleteInputId from "!!raw-loader!../../../code_snippets/api-guide/data/delete_input_by_id.py";
import PythonDeleteListInputs from "!!raw-loader!../../../code_snippets/api-guide/data/delete_list_inputs.py";


The API is built around a simple idea. You send inputs \(such as images\) to the service and it returns predictions. In addition to receiving predictions on inputs, you can also index inputs and their predictions to later search against. You can also index inputs with concepts to later train your own model.

When you add an input to your app, the base workflow of your app runs, computing the outputs from all the models in that workflow and indexing those outputs. Those indexed outputs are what incur the indexing fee monthly, and enable search and training on top of the outputs of the base workflow models.

:::info
The initialization code used in the following examples is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)
:::

## Add Inputs

You can add inputs one by one or in bulk. If you send them in bulk, you are limited to sending 128 inputs at a time.

:::note
**Adding inputs is an asynchronous operation.** That means it will process indexing of your inputs through your default workflow in the background, which can take some time. In order to check the status of each input you add, see the section on [Get Inputs](#get-inputs) and look for status 30000 \(INPUT\_IMAGE\_DOWNLOAD\_SUCCESS\) status code on each input to know when it has successfully been indexed.
:::

### Add Inputs via URL

Below is an example of how to add inputs via a publicly accessible URL. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddInputsViaURL}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse postInputsResponse = stub.postInputs(
    PostInputsRequest.newBuilder().addInputs(
        Input.newBuilder().setData(
            Data.newBuilder().setImage(
                Image.newBuilder()
                    .setUrl("https://samples.clarifai.com/metro-north.jpg")
                    .setAllowDuplicateUrl(true)
            )
        )
    ).build()
);

if (postInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post inputs failed, status: " + postInputsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostInputs(
    {
        inputs: [{data: {image: {url: "https://samples.clarifai.com/metro-north.jpg", allow_duplicate_url: true}}}]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post inputs failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = client.PostInputs(
    new PostInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
				Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Url = "https://samples.clarifai.com/metro-north.jpg",
														AllowDuplicateUrl = true // optional
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "inputs": [
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/metro-north.jpg",
            "allow_duplicate_url": true
          }
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/inputs
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "inputs": [
    {
      "data": {
        "image": {
          "url": "https://samples.clarifai.com/metro-north.jpg",
          "allow_duplicate_url": true
        }
      }
    }
  ]
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/inputs", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Add Inputs via Bytes

Below is an example of how to add inputs via bytes.

:::note
The data must be base64 encoded. When you add a base64 image to our servers, a copy will be stored and hosted on our servers. If you already have an image hosting service, we recommend using it and adding images via the `url` parameter.
:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddInputsViaBytes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;
import com.google.protobuf.ByteString;
import java.io.File;
import java.nio.file.Files;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse postInputsResponse = stub.postInputs(
    PostInputsRequest.newBuilder().addInputs(
        Input.newBuilder().setData(
            Data.newBuilder().setImage(
                Image.newBuilder()
                    .setBase64(ByteString.copyFrom(Files.readAllBytes(
                        new File("{YOUR_IMAGE_LOCATION}").toPath()
                    )))
            )
        )
    ).build()
);

if (postInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post inputs failed, status: " + postInputsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

const fs = require("fs");
const imageBytes = fs.readFileSync("{YOUR_IMAGE_LOCATION}");

stub.PostInputs(
    {
        inputs: [{data: {image: {base64: imageBytes}}}]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post inputs failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = client.PostInputs(
    new PostInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
				Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Base64 = "{YOUR_IMAGE_BYTES_STRING}",
														AllowDuplicateUrl = true // optional
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "inputs": [
      {
        "data": {
          "image": {
            "base64": '"`base64 /home/user/image.jpeg`"'"
          }
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/inputs
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "inputs": [
    {
      "data": {
        "image": {
          "base64": "{YOUR_BYTES_STRING}"
        },
      }
    }
  ]
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/inputs", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Add Multiple Inputs With IDs

In cases where you have your own `id` and you only have one item per image, you are encouraged to send inputs with your own `id`. This will help you later match the input to your own database. 

If you do not send an `id`, one will be created for you. If you have more than one item per image, it is recommended that you put the product `id` in the metadata.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddMultipleInputsIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse postInputsResponse = stub.postInputs(
    PostInputsRequest.newBuilder()
        .addInputs(
            Input.newBuilder()
                .setId("train1")
                .setData(
                    Data.newBuilder().setImage(
                        Image.newBuilder()
                            .setUrl("https://samples.clarifai.com/metro-north.jpg")
                            .setAllowDuplicateUrl(true)
                    )
                )
        )
        .addInputs(
            Input.newBuilder()
                .setId("puppy1")
                .setData(
                    Data.newBuilder().setImage(
                        Image.newBuilder()
                            .setUrl("https://samples.clarifai.com/puppy.jpeg")
                            .setAllowDuplicateUrl(true)
                    )
                )
        )
        .build()
);

if (postInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    for (Input input : postInputsResponse.getInputsList()) {
        System.out.println("Input " + input.getId() + " status: ");
        System.out.println(input.getStatus() + "\n");
    }

    throw new RuntimeException("Post inputs failed, status: " + postInputsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostInputs(
    {
        inputs: [
            {
                id: "train1",
                data: {image: {url: "https://samples.clarifai.com/metro-north.jpg", allow_duplicate_url: true}}
            },
            {
                id: "puppy1",
                data: {image: {url: "https://samples.clarifai.com/puppy.jpeg", allow_duplicate_url: true}}
            },
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            for (const input of response.inputs) {
                console.log("Input " + input.id + " status: ");
                console.log(JSON.stringify(input.status, null, 2) + "\n");
            }

            throw new Error("Post inputs failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = client.PostInputs(
    new PostInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
				Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
										Id = "train1"
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Url = "https://samples.clarifai.com/metro-north.jpg",
														AllowDuplicateUrl = true // optional
                        }
                    }
                }
            },
						{
                new Input()
                {
										Id = "puppy1"
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Url = "https://samples.clarifai.com/puppy.jpeg",
														AllowDuplicateUrl = true // optional
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "inputs": [
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/metro-north.jpg",
            "allow_duplicate_url": true
          }
        },
        "id": "train1"
      },
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/puppy.jpeg",
            "allow_duplicate_url": true
          }
        },
        "id": "puppy1"
      }
    ]
  }'\
  https://api.clarifai.com/v2/inputs
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
    "inputs": [
        {
        "data": {
            "image": {
            "url": "https://samples.clarifai.com/metro-north.jpg",
            "allow_duplicate_url": true
            }
        },
        "id": "input1"
        },
            {
        "data": {
            "image": {
            "url": "https://samples.clarifai.com/puppy.jpeg",
            "allow_duplicate_url": true
            }
        },
        "id": "puppy1"
        }
    ]
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/inputs", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Add Inputs With Concepts

If you would like to add an input with concepts, you can do so. Concepts play an important role in creating your own models. 

You can learn more about [creating your own models here](../model). Concepts also help you search for inputs. You can [learn more about search here](../search).

When you add a concept to an input, you need to indicate whether the concept is present in the image or not. 

You can add inputs with concepts via URLs or bytes.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse postInputsResponse = stub.postInputs(
    PostInputsRequest.newBuilder().addInputs(
        Input.newBuilder().setData(
            Data.newBuilder()
                .setImage(
                    Image.newBuilder()
                        .setUrl("https://samples.clarifai.com/puppy.jpeg")
                        .setAllowDuplicateUrl(true)
                )
                .addConcepts(
                    Concept.newBuilder()
                        .setId("charlie")
                        .setValue(1f)
                )
        )
    ).build()
);

if (postInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post inputs failed, status: " + postInputsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostInputs(
    {
        inputs: [{data: {
            image: {url: "https://samples.clarifai.com/puppy.jpeg", allow_duplicate_url: true},
            concepts: [{id: "charlie", value: 1.}]
        }}]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post inputs failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = client.PostInputs(
    new PostInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
				Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Url = "https://samples.clarifai.com/puppy.jpeg",
														AllowDuplicateUrl = true // optional
                        },
												Concepts = 
												{
                            new List<Concept>
                            {
                                new Concept
                                {
                                    Id = "charlie",
																		Value = 1
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "inputs": [
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/puppy.jpeg",
            "allow_duplicate_url": true
          },
          "concepts":[
            {
              "id": "charlie",
              "value": 1
            }
          ]
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/inputs
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "inputs": [
      {
      "data": {
          "image": {
            "url": "https://samples.clarifai.com/puppy.jpeg",
            "allow_duplicate_url": true
          },
          // Optionally add a concept with your input
          "concepts": [
          {
            "id": "charlie",
            "value": 1
          }
        ]
      }
    }
  ]
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/inputs", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Add Inputs With Custom Metadata

In addition to adding an input with concepts, you can also add an input with custom metadata. This metadata will then be searchable. Metadata can be any arbitrary JSON.


If you have more than one item per image, it is recommended to put the `id` in the metadata like:

```text
{
  "product_id": "xyz"
}
```

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddInputsCustomMetadata}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse postInputsResponse = stub.postInputs(
    PostInputsRequest.newBuilder().addInputs(
        Input.newBuilder().setData(
            Data.newBuilder()
                .setImage(
                    Image.newBuilder()
                        .setUrl("https://samples.clarifai.com/puppy.jpeg")
                        .setAllowDuplicateUrl(true)
                )
                .setMetadata(
                    Struct.newBuilder()
                        .putFields("id", Value.newBuilder().setStringValue("id001").build())
                        .putFields("type", Value.newBuilder().setStringValue("animal").build())
                        .putFields("size", Value.newBuilder().setNumberValue(100).build())
                )
        )
    ).build()
);

if (postInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post inputs failed, status: " + postInputsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostInputs(
    {
        inputs: [{data: {
            image: {url: "https://samples.clarifai.com/puppy.jpeg", allow_duplicate_url: true},
            metadata: {id: "id001", type: "animal", size: 100}
        }}]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post inputs failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "inputs": [
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/puppy.jpeg",
            "allow_duplicate_url": true
          },
          "metadata": {"id": "id001", "type": "animal", "size": 100}
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/inputs
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "inputs": [
    {
      "data": {
        "image": {
          "url": "https://samples.clarifai.com/puppy.jpeg",
          "allow_duplicate_url": true
        },
        "metadata": {"id": "id001", "type": "animal", "size": 100}
      }
    }
  ]
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/inputs", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## List Inputs

### List all Inputs

<!--##LINKS NOT WORKING
You can list all the inputs \(images\) you have previously added either for [search](https://github.com/Clarifai/docs/tree/5882f46bd17affcd85ed3e2ec98f4d6f355b58a9/advanced-searches.md) or [train](https://github.com/Clarifai/docs/tree/5882f46bd17affcd85ed3e2ec98f4d6f355b58a9/train.md).
-->

You can list all the inputs \(images\) you have previously added either for search or train.

If you added inputs with concepts, they will be returned in the response as well.

This request is paginated.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListAllInputs}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse listInputsResponse = stub.listInputs(
    ListInputsRequest.newBuilder()
        .setPage(1)
        .setPerPage(10)
        .build()
);

if (listInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List inputs failed, status: " + listInputsResponse.getStatus());
}

for (Input input : listInputsResponse.getInputsList()) {
    System.out.println(input);
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.ListInputs(
    {page: 1, per_page: 10},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List inputs failed, status: " + response.status.description);
        }

        for (const input of response.inputs) {
            console.log(JSON.stringify(input, null, 2));
        }
    }
);
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = client.ListInputs(
    new ListInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
				Page = 1,
				PerPage = 10
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/inputs?page=1&per_page=10
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/inputs?page=1&per_page=10`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### List Inputs \(Streaming\)

This is another method for listing inputs which was built to scalably list an app's inputs in an iterative / streaming fashion. `StreamInputs` will return `per_page` number of inputs from a certain input onward, controlled by the optional `last_id` parameter \(defaults to the first input\).

By default, the stream will return inputs from oldest to newest. Set the `descending` field to true to reverse that order.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListInputsStreaming}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import java.util.List;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

// To start from beginning, do not provide the last ID parameter.
MultiInputResponse firstStreamInputsResponse = stub.streamInputs(
    StreamInputsRequest.newBuilder()
        .setPerPage(10)
        .build()
);

if (firstStreamInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Stream inputs failed, status: " + firstStreamInputsResponse.getStatus());
}

System.out.println("First response (starting from the first input):");
List<Input> inputs = firstStreamInputsResponse.getInputsList();
for (Input input : inputs) {
    System.out.println("\t" + input.getId());
}

String lastId = inputs.get(inputs.size() - 1).getId();

// Set last ID to get the next set of inputs. The returned inputs will not include the last ID input.
MultiInputResponse secondStreamInputsResponse = stub.streamInputs(
    StreamInputsRequest.newBuilder()
        .setLastId(lastId)
        .setPerPage(10)
        .build()
);

if (secondStreamInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Stream inputs failed, status: " + secondStreamInputsResponse.getStatus());
}

System.out.println(String.format("Second response (first input is the one following input ID %s)", lastId));
for (Input input : secondStreamInputsResponse.getInputsList()) {
    System.out.println("\t" + input.getId());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.StreamInputs(
    {
        per_page: 10
    },
    metadata,
    (err, firstResponse) => {
        if (err) {
            done(err);
            return;
        }

        if (firstResponse.status.code !== 10000) {
            done(new Error("Received status: " + firstResponse.status.description + "\n" + firstResponse.status.details));
            return;
        }

        console.log("First response (starting from the first input):");
        for (const input of firstResponse.inputs) {
            console.log("\t" + input.id);
        }

        const lastId = firstResponse.inputs[firstResponse.inputs.length - 1].id;
        stub.StreamInputs(
            {
                last_id: lastId,
                per_page: 10
            },
            metadata,
            (err, secondResponse) => {
                if (err) {
                    done(err);
                    return;
                }

                if (secondResponse.status.code !== 10000) {
                    done(new Error("Received status: " + secondResponse.status.description + "\n" + secondResponse.status.details));
                    return;
                }

                console.log("Second response (first input is the one following input ID " + lastId + ")");
                for (const input of secondResponse.inputs) {
                    console.log("\t" + input.id);
                }

                done();
            }
        );
    }
);
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
// We can implement the API call with a Promise
const streamInputs = (reqAddress) => {
  return new Promise(async (resolve, reject) => {
    fetch(reqAddress, requestOptions)
    .then(data => {
        return data.json()
    }).then(data => {
        resolve(data)
    }).catch(e => {
        console.error('REQUEST -> ', e)
        reject(e)
    })
  })
}

// Async function that will allow us to wait for the first API call
const run = async () => {

	const appId = '{YOUR_APP_ID}'

  const requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
    }
  };

  const REQ_ADDRESS = `https://api.clarifai.com/v2/users/me/apps/${appId}/inputs/stream?per_page=5`

  const req1 = await streamInputs(REQ_ADDRESS)

	// Grab the last input_id from the first request to use it in the second request
  const lastId = req1['inputs'][req1['inputs'].length - 1].id

  const req2 = await streamInputs(REQ_ADDRESS + `&last_id=${lastId}`)

	// You're only receiving the inputs from up to the last_id onward
  console.log(req2)
}

run()
```
</TabItem>

</Tabs>

## Get Inputs

### Get Input by ID

If you'd like to get the details of a specific input by its `id`, you can do that as well.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetInputId}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

SingleInputResponse getInputResponse = stub.getInput(
    GetInputRequest.newBuilder()
        .setInputId("{YOUR_INPUT_ID}")
        .build()
);

if (getInputResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Get input failed, status: " + getInputResponse.getStatus());
}

Input input = getInputResponse.getInput();
System.out.println(input);
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.GetInput(
    {input_id: "{YOUR_INPUT_ID}"},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Get input failed, status: " + response.status.description);
        }

        const input = response.input;
        console.log(JSON.stringify(input, null, 2));
    }
);
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = client.ListInputs(
    new ListInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
				InputId = "{YOUR_INPUT_ID}"
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/inputs/{YOUR_INPUT_ID}
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const inputId = '{YOUR_INPUT_ID}'
const appId = '{YOUR_APP_ID}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/inputs/${inputId}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Get Inputs' Status

If you add inputs in bulk, they will be procesed in the background. You can get the status of all your inputs \(processed, to\_process, and errors\) like this:

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetInputsStatus}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

SingleInputCountResponse getInputCountResponse = stub.getInputCount(
    GetInputCountRequest.newBuilder().build()
);

if (getInputCountResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Get input count failed, status: " + getInputCountResponse.getStatus());
}

InputCount inputCount = getInputCountResponse.getCounts();
System.out.println(inputCount);
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.GetInputCount(
    {},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Get input count failed, status: " + response.status.description);
        }

        const counts = response.counts;
        console.log(JSON.stringify(counts, null, 2));
    }
);
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = client.GetInputCount(
    new GetInputCountRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);

Console.WriteLine(response.Counts);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/inputs/status
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_ACCESS_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/inputs/status`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## Update Inputs

### Update Input With Concepts

To update an input with a new concept, or to change a concept value from true/false, you can do the following:

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateInputConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse patchInputsResponse = stub.patchInputs(
    PatchInputsRequest.newBuilder()
        .setAction("merge")  // Supported actions: overwrite, merge, remove.
        .addInputs(
            Input.newBuilder()
                .setId("{YOUR_INPUT_ID}")
                .setData(
                    Data.newBuilder()
                        .addConcepts(
                            Concept.newBuilder()
                                .setId("tree")
                                .setValue(1f)  // 1 means true, this concept is present.
                        )
                        .addConcepts(
                            Concept.newBuilder()
                                .setId("water")
                                .setValue(0f)  // 0 means false, this concept is not present.
                        )
                )
                .build()
        )
        .build()
);

if (patchInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Patch inputs failed, status: " + patchInputsResponse.getStatus());
}
```
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PatchInputs(
    {
        action: "merge",  // Supported actions: overwrite, merge, remove.
        inputs: [
            {
                id: "{YOUR_INPUT_ID}",
                // 1 means true, this concept is present.
                // 0 means false, this concept is not present.
                data: {concepts: [{id: "tree", value: 1}, {id: "water", value: 0}]}
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Patch inputs failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = client.PatchInputs(
    new PatchInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        }
				Action = "merge",
				Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
										InputId = "{YOUR_INPUT_ID}",
                    Data = new Data()
                    {
												Concepts = 
												{
                            new List<Concept>
                            {
                                new Concept
                                {
                                    Id = "tree",
																		Value = 1
                                }
                            },
																new Concept
                                {
                                    Id = "water",
																		Value = O
                                }
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
# Value of 1 means true, this concept is present.
# Value of 0 means false, this concept is not present.
# Supported actions: overwrite, merge, remove.
curl -X PATCH \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "inputs": [
      {
        "id": "{YOUR_INPUT_ID}",
        "data": {
          "concepts": [
            {
              "id": "tree",
              "value": 1
            },
            {
              "id": "water",
              "value": 0
            }
          ]
        }
      }
    ],
    "action":"merge"
}'\
  https://api.clarifai.com/v2/inputs
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "inputs": [
    {
      "id": "{YOUR_INPUT_ID}",
      "data": {
        "concepts": [
          {
            "id": "tree",
						"value": 1
          },
          {
            "id": "water",
						"value": 0
          }
        ]
      }
    }
  ],
  "action": "merge"
});

const requestOptions = {
  method: 'PATCH',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/inputs", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Bulk Update Inputs With Concepts

You can update existing inputs using their `ids`. This is useful if you'd like to add concepts to inputs after they have already been added.

Below is an example of how to update multiple inputs with concepts at once. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonBulkUpdateInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse patchInputsResponse = stub.patchInputs(
    PatchInputsRequest.newBuilder()
        .setAction("merge")  // Supported actions: overwrite, merge, remove.
        .addInputs(
            Input.newBuilder()
                .setId("{YOUR_INPUT_ID_1}")
                .setData(
                    Data.newBuilder()
                        .addConcepts(
                            Concept.newBuilder()
                                .setId("tree")
                                .setValue(1f)  // 1 means true, this concept is present.
                        )
                        .addConcepts(
                            Concept.newBuilder()
                                .setId("water")
                                .setValue(0f)  // 0 means false, this concept is not present.
                        )
                )
                .build()
        )
        .addInputs(
            Input.newBuilder()
                .setId("{YOUR_INPUT_ID_2}")
                .setData(
                    Data.newBuilder()
                        .addConcepts(
                            Concept.newBuilder()
                                .setId("animal")
                                .setValue(1f)
                        )
                        .addConcepts(
                            Concept.newBuilder()
                                .setId("fruit")
                                .setValue(0f)
                        )
                )
                .build()
        )
        .build()
);

if (patchInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Patch inputs failed, status: " + patchInputsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PatchInputs(
    {
        action: "merge",  // Supported actions: overwrite, merge, remove.
        inputs: [
            {
                id: "{YOUR_INPUT_ID_1}",
                data: {concepts: [{id: "tree", value: 1}, {id: "water", value: 0}]}
            },
            {
                id: "{YOUR_INPUT_ID_2}",
                data: {concepts: [{id: "animal", value: 1}, {id: "fruit", value: 0}]}
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Patch inputs failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = client.PatchInputs(
    new PatchInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        }
				Action = "merge",
				Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
										InputId = "{YOUR_INPUT_ID_1}",
                    Data = new Data()
                    {
												Concepts = 
												{
                            new List<Concept>
                            {
                                new Concept
                                {
                                    Id = "tree",
																		Value = 1
                                }
                            },
																new Concept
                                {
                                    Id = "water",
																		Value = O
                                }
                        }
                    }
                }
            },
						{
                new Input()
                {
										InputId = "{YOUR_INPUT_ID_2}",
                    Data = new Data()
                    {
												Concepts = 
												{
                            new List<Concept>
                            {
                                new Concept
                                {
                                    Id = "animal",
																		Value = 1
                                }
                            },
																new Concept
                                {
                                    Id = "fruit",
																		Value = O
                                }
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
# Value of 1 means true, this concept is present.
# Value of 0 means false, this concept is not present.
# Supported actions: overwrite, merge, remove.
curl -X PATCH \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "inputs": [
      {
        "id": "{YOUR_INPUT_ID_1}",
        "data": {
          "concepts": [
            {
              "id": "tree",
              "value": 1
            },
            {
              "id": "water",
              "value": 0
            }
          ]
        }
      },
      {
        "id": "{YOUR_INPUT_ID_2}",
        "data": {
          "concepts": [
            {
              "id": "animal",
              "value": 1
            },
            {
              "id": "fruit",
              "value": 0
            }
          ]
        }
      }
    ],
    "action":"merge"
}'\
  https://api.clarifai.com/v2/inputs
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "inputs": [
    {
      "id": "{YOUR_INPUT_ID_1}",
      "data": {
        "concepts": [
          {
            "id": "tree",
            "value": 1
          },
          {
            "id": "water",
            "value": 0
          }
        ]
      }
    },
    {
      "id": "{YOUR_INPUT_ID_2}",
      "data": {
        "concepts": [
          {
            "id": "animal",
            "value": 1
          },
          {
            "id": "fruit",
            "value": 0
          }
        ]
      }
    }
  ],
  "action": "merge"
});

const requestOptions = {
  method: 'PATCH',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/inputs", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## Delete Inputs

### Delete Concepts From an Input

To remove concepts that were already added to an input, you can do this:

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteConceptsInput}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse patchInputsResponse = stub.patchInputs(
    PatchInputsRequest.newBuilder()
        .setAction("remove")  // Supported actions: overwrite, merge, remove.
        .addInputs(
            Input.newBuilder()
                .setId("{YOUR_INPUT_ID}")
                .setData(
                    Data.newBuilder()
                        .addConcepts(
                            // We're removing the concept, so there's no need to specify
                            // the concept value.
                            Concept.newBuilder().setId("tree")
                        )
                )
                .build()
        )
        .build()
);

if (patchInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Patch inputs failed, status: " + patchInputsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse patchInputsResponse = stub.patchInputs(
    PatchInputsRequest.newBuilder()
        .setAction("remove")  // Supported actions: overwrite, merge, remove.
        .addInputs(
            Input.newBuilder()
                .setId("{YOUR_INPUT_ID}")
                .setData(
                    Data.newBuilder()
                        .addConcepts(
                            // We're removing the concept, so there's no need to specify
                            // the concept value.
                            Concept.newBuilder().setId("tree")
                        )
                )
                .build()
        )
        .build()
);

if (patchInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Patch inputs failed, status: " + patchInputsResponse.getStatus());
}
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = client.PatchInputs(
    new PatchInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        }
				Action = "remove",
				Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
										InputId = "{YOUR_INPUT_ID}",
                    Data = new Data()
                    {
												Concepts = 
												{
                            new List<Concept>
                            {
                                new Concept
                                {
                                    Id = "tree"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
# We're removing the concept, so there's no need to specify
# the concept value.
curl -X PATCH \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "inputs": [
      {
        "id":"{YOUR_INPUT_ID}",
        "data": {
            "concepts":[
                {"id":"water"}
            ]
        }
      }
    ],
    "action":"remove"
  }'\
  https://api.clarifai.com/v2/inputs/
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "inputs": [
    {
      "id":"{YOUR_INPUT_ID}",
      "data": {
          "concepts":[
              {"id":"water"}
          ]
      }
    }
  ],
  "action":"remove"
});

const requestOptions = {
  method: 'PATCH',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/inputs", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Bulk Delete Concepts From a List of Inputs

Below is an example of how to bulk delete multiple concepts from a list of inputs. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonBulkDeleteConceptsInputs}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse patchInputsResponse = stub.patchInputs(
    PatchInputsRequest.newBuilder()
        .setAction("remove")  // Supported actions: overwrite, merge, remove.
        .addInputs(
            Input.newBuilder()
                .setId("{YOUR_INPUT_ID_1}")
                .setData(
                    Data.newBuilder()
                        // We're removing the concepts, so there's no need to specify
                        // the concept value.
                        .addConcepts(
                            Concept.newBuilder().setId("tree")
                        )
                        .addConcepts(
                            Concept.newBuilder().setId("water")
                        )
                )
                .build()
        )
        .addInputs(
            Input.newBuilder()
                .setId("{YOUR_INPUT_ID_2}")
                .setData(
                    Data.newBuilder()
                        .addConcepts(
                            Concept.newBuilder().setId("animal")
                        )
                        .addConcepts(
                            Concept.newBuilder().setId("fruit")
                        )
                )
                .build()
        )
        .build()
);

if (patchInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Patch inputs failed, status: " + patchInputsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PatchInputs(
    {
        action: "remove",  // Supported actions: overwrite, merge, remove.
        inputs: [
            {
                id: "{YOUR_INPUT_ID_1}",
                // We're removing the concepts, so there's no need to specify
                // the concept value.
                data: {concepts: [{id: "tree"}, {id: "water"}]}
            },
            {
                id: "{YOUR_INPUT_ID_2}",
                data: {concepts: [{id: "animal"}, {id: "fruit"}]}
            },
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Patch inputs failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = client.DeleteInput(
    new DeleteInputRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        }
				Action = "remove",
				Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
										InputId = "{YOUR_INPUT_ID_1}",
                    Data = new Data()
                    {
												Concepts = 
												{
                            new List<Concept>
                            {
                                new Concept
                                {
                                    Id = "tree"
                                }
                            },
														{
                                new Concept
                                {
                                    Id = "water"
                                }
                            }
                        }
                    }
                }
            },
						{
                new Input()
                {
										InputId = "{YOUR_INPUT_ID_2}",
                    Data = new Data()
                    {
												Concepts = 
												{
                            new List<Concept>
                            {
                                new Concept
                                {
                                    Id = "animal"
                                }
                            },
														{
                                new Concept
                                {
                                    Id = "fruit"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
# We're removing the concept, so there's no need to specify
# the concept value.
curl -X PATCH \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "inputs": [
      {
        "id": "{YOUR_INPUT_ID_1}",
        "data": {
          "concepts":[
            {
              "id": "tree"
            },
            {
              "id": "water"
            }
          ]
        }
      },
      {
        "id": "{YOUR_INPUT_ID_2}",
        "data": {
          "concepts":[
            {
              "id": "animal"
            },
            {
              "id": "fruit"
            }
          ]
        }
      }
    ],
    "action":"remove"
  }'\
  https://api.clarifai.com/v2/inputs
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "inputs": [
    {
      "id": "{YOUR_INPUT_ID_1}",
      "data": {
        "concepts":[
          {
            "id": "tree"
          },
          {
            "id": "water"
          }
        ]
      }
    },
    {
      "id": "{YOUR_INPUT_ID_2}",
      "data": {
        "concepts":[
          {
            "id": "animal"
          },
          {
            "id": "fruit"
          }
        ]
      }
    }
  ],
  "action":"remove"
});

const requestOptions = {
  method: 'PATCH',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/inputs", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Delete Input by ID

Below is an example of how to delete a single input by its `id`. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteInputId}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

BaseResponse deleteInputResponse = stub.deleteInput(
    DeleteInputRequest.newBuilder()
        .setInputId("{YOUR_INPUT_ID}")
        .build()
);

if (deleteInputResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Delete input failed, status: " + deleteInputResponse.getStatus());
}
```
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.DeleteInput(
    {
        input_id: "{YOUR_INPUT_ID}"
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Delete input failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = client.DeleteInput(
    new DeleteInputRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
				inputId = "{YOUR_INPUT_ID}"
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X DELETE \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/inputs/{YOUR_INPUT_ID}
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const inputId = '{YOUR_INPUT_ID}'
const appId = '{YOUR_APP_ID}'

const requestOptions = {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/inputs/${inputId}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Delete a List of Inputs

You can also delete multiple inputs in one API call. This will happen asynchronously.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteListInputs}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

BaseResponse listInputsResponse = stub.deleteInputs(
    DeleteInputsRequest.newBuilder()
        .addIds("{YOUR_INPUT_ID_1}")
        .addIds("{YOUR_INPUT_ID_2}")
        .build()
);

if (listInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Delete inputs failed, status: " + listInputsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.DeleteInputs(
    {
        ids: ["{YOUR_INPUT_ID_1}", "{YOUR_INPUT_ID_2}"]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Delete inputs failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = client.DeleteInput(
    new DeleteInputRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
				Ids = {
            new List<string>()
            {
                "{YOUR_INPUT_ID_1}", 
								"{YOUR_INPUT_ID_2}"
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X DELETE \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "ids":["{YOUR_INPUT_ID_1}","{YOUR_INPUT_ID_2}"]
  }'\
  https://api.clarifai.com/v2/inputs
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "ids":["{YOUR_INPUT_ID_1}","{YOUR_INPUT_ID_2}"]
});

const requestOptions = {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/inputs", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>