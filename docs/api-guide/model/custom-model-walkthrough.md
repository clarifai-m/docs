---
description: Clarifai makes it easy to customize and repurpose existing models.
sidebar_position: 3
---

# Custom Models

**Clarifai makes it easy to customize and repurpose existing models**
<hr />

You do not need many images to get started. We recommend starting with 10 and adding more as needed. Before you train your first model, you need to [create an application](../../clarifai-basics/applications/#create-an-application) and select a Base Workflow.

![](/img/illustration-training.png)

:::info
The initialization code used in the following examples is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)
:::

## Add Images With Concepts

To get started training your own model, you must first add images that already contain the concepts you want your model to see.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonAddImagesConcepts from "!!raw-loader!../../../code_snippets/api-guide/model/add_images_with_concepts.py";
import PythonCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_model.py";
import PythonTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/train_model.py";
import PythonPredictModel from "!!raw-loader!../../../code_snippets/api-guide/model/predict_with_model.py";


<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonAddImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse postInputsResponse = stub.postInputs(
    PostInputsRequest.newBuilder()
        .addInputs(
            Input.newBuilder()
                .setData(
                    Data.newBuilder()
                        .setImage(
                            Image.newBuilder()
                                .setUrl("https://samples.clarifai.com/puppy.jpeg")
                                .setAllowDuplicateUrl(true)
                        )
                        .addConcepts(Concept.newBuilder().setId("charlie").setValue(1))
                        .addConcepts(Concept.newBuilder().setId("our_wedding").setValue(0))
                )
        )
        .addInputs(
            Input.newBuilder()
                .setData(
                    Data.newBuilder()
                        .setImage(
                            Image.newBuilder()
                                .setUrl("https://samples.clarifai.com/wedding.jpg")
                                .setAllowDuplicateUrl(true)
                        )
                        .addConcepts(Concept.newBuilder().setId("our_wedding").setValue(1))
                        .addConcepts(Concept.newBuilder().setId("charlie").setValue(0))
                        .addConcepts(Concept.newBuilder().setId("cat").setValue(0))
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

<TabItem value="grpc_nodejs" label="gRPC NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostInputs(
    {
        inputs: [
            {
                data: {
                    image: {url: "https://samples.clarifai.com/puppy.jpeg", allow_duplicate_url: true},
                    concepts: [{id: "charlie", value: 1}, {id: "our_wedding", value: 0}]
                }
            },
            {
                data: {
                    image: {url: "https://samples.clarifai.com/wedding.jpg", allow_duplicate_url: true},
                    concepts: [{id: "our_wedding", value: 1}, {id: "charlie", value: 0}, {id: "cat", value: 0}]
                }
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

<TabItem value="javascript" label="Javascript">

```javascript
app.inputs.create({
  url: "https://samples.clarifai.com/puppy.jpeg",
  concepts: [
    {
      id: "charlie",
      value: true
    }
  ]
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp
from clarifai.rest import Image as ClImage

app = ClarifaiApp(api_key='YOUR_API_KEY')

# add multiple images with concepts
img1 = ClImage(url="https://samples.clarifai.com/puppy.jpeg", concepts=['charlie'], not_concepts=['our_wedding'])
img2 = ClImage(url="https://samples.clarifai.com/wedding.jpg", concepts=['our_wedding'], not_concepts=['cat','charlie'])

app.inputs.bulk_create_images([img1, img2])
```
</TabItem>

<TabItem value="java" label="Java">

```java
client.addInputs()
    .plus(
        ClarifaiInput.forImage("https://samples.clarifai.com/puppy.jpeg")
            .withConcepts(Concept.forID("charlie"))
    )
    .executeSync();
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
using System.Collections.Generic;
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs.Inputs;
using Clarifai.DTOs.Predictions;

namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");

            await client.AddInputs(
                    new ClarifaiURLImage(
                        "https://samples.clarifai.com/puppy.jpeg",
                        positiveConcepts: new List<Concept> {new Concept(id: "charlie")}))
                .ExecuteAsync();
        }
    }
}
```
</TabItem>

<TabItem value="objective-c" label="Objective-C">

```objectivec
ClarifaiImage *image = [[ClarifaiImage alloc] initWithURL:@"https://samples.clarifai.com/puppy.jpeg" andConcepts:@"cute puppy"];
[_app addInputs:@[image] completion:^(NSArray<ClarifaiInput *> *inputs, NSError *error) {
    NSLog(@"inputs: %@", inputs);
}];
```
</TabItem>

<TabItem value="php" label="PHP">

```php
use Clarifai\API\ClarifaiClient;
use Clarifai\DTOs\Inputs\ClarifaiURLImage;
use Clarifai\DTOs\Predictions\Concept;

$client = new ClarifaiClient('YOUR_API_KEY');

$response = $client->addInputs(
        (new ClarifaiURLImage('https://samples.clarifai.com/puppy.jpeg'))
        ->withAllowDuplicateUrl(true)
        ->withPositiveConcepts([new Concept('charlie')]))
    ->executeSync();

if ($response-> isSuccessful()) {
    echo "Response is successful.\n";
} else {
    echo "Response is not successful. Reason: \n";
    echo $response->status()->description() . "\n";
    echo $response->status()->errorDetails() . "\n";
    echo "Status code: " . $response->status()->statusCode();
}
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
            },
            {
              "id": "our_wedding",
              "value": 0
            }
          ]
        }
      },
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/wedding.jpg",
            "allow_duplicate_url": true
          },
          "concepts":[
            {
              "id": "our_wedding",
              "value": 1
            },
            {
              "id": "charlie",
              "value": 0
            },
            {
              "id": "cat",
              "value": 0
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
        "concepts":[
          {
            "id": "charlie",
            "value": 1
          },
          {
            "id": "our_wedding",
            "value": 0
          }
        ]
      }
    },
    {
      "data": {
        "image": {
          "url": "https://samples.clarifai.com/wedding.jpg",
          "allow_duplicate_url": true
        },
        "concepts":[
          {
            "id": "our_wedding",
            "value": 1
          },
          {
            "id": "charlie",
            "value": 0
          },
          {
            "id": "cat",
            "value": 0
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

<details>
  <summary>JSON Output Example</summary>

```javascript
status {
  code: SUCCESS
  description: "Ok"
  req_id: "7ff42b88ef477bb9b9ecab0b61d051ca"
}
inputs {
  id: "7b708ee204284ed0a914dc37a7def8be"
  data {
    image {
      url: "https://samples.clarifai.com/puppy.jpeg"
      image_info {
        format: "UnknownImageFormat"
        color_mode: "UnknownColorMode"
      }
    }
    concepts {
      id: "charlie"
      name: "charlie"
      value: 1.0
      app_id: "test-app"
    }
    concepts {
      id: "our_wedding"
      name: "our_wedding"
      app_id: "test-app"
    }
  }
  created_at {
    seconds: 1646288847
    nanos: 89138802
  }
  modified_at {
    seconds: 1646288847
    nanos: 89138802
  }
  status {
    code: INPUT_DOWNLOAD_PENDING
    description: "Download pending"
  }
}
inputs {
  id: "5571376e9d42447dafb76711669f6731"
  data {
    image {
      url: "https://samples.clarifai.com/wedding.jpg"
      image_info {
        format: "UnknownImageFormat"
        color_mode: "UnknownColorMode"
      }
    }
    concepts {
      id: "our_wedding"
      name: "our_wedding"
      value: 1.0
      app_id: "test-app"
    }
    concepts {
      id: "charlie"
      name: "charlie"
      app_id: "test-app"
    }
    concepts {
      id: "cat"
      name: "cat"
      app_id: "test-app"
    }
  }
  created_at {
    seconds: 1646288847
    nanos: 89138802
  }
  modified_at {
    seconds: 1646288847
    nanos: 89138802
  }
  status {
    code: INPUT_DOWNLOAD_PENDING
    description: "Download pending"
  }
}

```
</details>

## Create a Model

Once your images with concepts are added, you are now ready to create the model. You'll need a name for the model and you'll also need to provide it with the concepts you added above.

Take note of the `model id` that is returned in the response. You'll need that for the next two steps.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCreateModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

SingleModelResponse postModelsResponse = stub.postModels(
    PostModelsRequest.newBuilder().addModels(
        Model.newBuilder()
            .setId("pets")
            .setOutputInfo(
                OutputInfo.newBuilder()
                    .setData(
                        Data.newBuilder().addConcepts(Concept.newBuilder().setId("charlie"))
                    )
                    .setOutputConfig(
                        OutputConfig.newBuilder()
                            .setConceptsMutuallyExclusive(false)
                            .setClosedEnvironment(false)
                    )
            )
    ).build()
);

if (postModelsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post models failed, status: " + postModelsResponse.getStatus());
}
```
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostModels(
    {
        models: [
            {
                id: "pets",
                output_info: {
                    data: {concepts: [{id: "charlie"}]},
                    output_config: {concepts_mutually_exclusive: false, closed_environment: false}
                }
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post models failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="javascript" label="Javascript">

```javascript
app.models.create(
  "pets",
  [
    { "id": "charlie" }
  ]
).then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);
```
</TabItem>

<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp
app = ClarifaiApp(api_key='YOUR_API_KEY')

model = app.models.create('pets', concepts=['charlie'])
```
</TabItem>

<TabItem value="java" label="Java">

```java
client.createModel("pets")
    .withOutputInfo(ConceptOutputInfo.forConcepts(
        Concept.forID("charlie")
    ))
    .executeSync();
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
using System.Collections.Generic;
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs.Predictions;

namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");

            await client.CreateModel(
                    "pets",
                    concepts: new List<Concept> {new Concept("charlie")})
                .ExecuteAsync();
        }
    }
}
```
</TabItem>

<TabItem value="objective-c" label="Objective-C">

```objectivec
[app createModel:@[concept] name:modelName conceptsMutuallyExclusive:NO closedEnvironment:NO
      completion:^(ClarifaiModel *model, NSError *error) {
        NSLog(@"model: %@", model);
}];
```
</TabItem>

<TabItem value="php" label="PHP">

```php
use Clarifai\API\ClarifaiClient;
use Clarifai\DTOs\Predictions\Concept;

$client = new ClarifaiClient('YOUR_API_KEY');

$response = $client->createModel('pets')
    ->withConcepts([new Concept('charlie')])
    ->executeSync();

if ($response-> isSuccessful()) {
    echo "Response is successful.\n";
} else {
    echo "Response is not successful. Reason: \n";
    echo $response->status()->description() . "\n";
    echo $response->status()->errorDetails() . "\n";
    echo "Status code: " . $response->status()->statusCode();
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "model": {
      "id": "pets",
      "output_info": {
        "data": {
          "concepts": [
            {
              "id": "charlie"
            }
          ]
        },
        "output_config": {
          "concepts_mutually_exclusive": false,
          "closed_environment":false
        }
      }
    }
  }'\
  https://api.clarifai.com/v2/models
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "model": {
    "id": "pets",
    "output_info": {
      "data": {
        "concepts": [
          {
            "id": "charlie"
          }
        ]
      },
      "output_config": {
        "concepts_mutually_exclusive": false,
        "closed_environment": false
      }
    }
  }
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/models", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>

```javascript
status {
  code: SUCCESS
  description: "Ok"
  req_id: "5e0b4675ea65cc53735c9ffd6d9b8f64"
}
model {
  id: "my-pets"
  name: "my-pets"
  created_at {
    seconds: 1646291711
    nanos: 640607856
  }
  app_id: "test-app"
  output_info {
    output_config {
    }
    message: "Show output_info with: GET /models/{model_id}/output_info"
    params {
      fields {
        key: "max_concepts"
        value {
          number_value: 20.0
        }
      }
      fields {
        key: "min_value"
        value {
          number_value: 0.0
        }
      }
      fields {
        key: "select_concepts"
        value {
          list_value {
          }
        }
      }
    }
  }
  model_version {
    id: "464bec38d2a2419c8a26e5b2660a0c0b"
    created_at {
      seconds: 1646291711
      nanos: 667255260
    }
    status {
      code: MODEL_UNTRAINED
      description: "Model not yet trained"
    }
    active_concept_count: 1
    visibility {
      gettable: PRIVATE
    }
    app_id: "test-app"
    user_id: "ei2leoz3s3iy"
    metadata {
    }
  }
  user_id: "ei2leoz3s3iy"
  input_info {
    params {
    }
  }
  train_info {
    params {
    }
  }
  model_type_id: "embedding-classifier"
  visibility {
    gettable: PRIVATE
  }
  metadata {
  }
  modified_at {
    seconds: 1646291711
    nanos: 640607856
  }
  import_info {
  }
}

```
</details>

## Train the Model

Now that you've added images with concepts, then created a model with those concepts, the next step is to train the model. When you train a model, you are telling the system to look at all the images with concepts you've provided and learn from them. This train operation is asynchronous. It may take a few seconds for your model to be fully trained and ready.

Keep note of the `model_version id` in the response. We'll need that for the next section when we predict with the model.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonTrainModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

SingleModelResponse postModelVersionsResponse = stub.postModelVersions(
    PostModelVersionsRequest.newBuilder()
        .setModelId("pets")
        .build()
);

if (postModelVersionsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post model versions failed, status: " + postModelVersionsResponse.getStatus());
}

String modelVersionId = postModelVersionsResponse.getModel().getModelVersion().getId();
System.out.println("New model version ID: " + modelVersionId);
```
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostModelVersions(
    {model_id: "pets"},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post model versions failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="javascript" label="Javascript">

```javascript
app.models.train("{model_id}").then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);

// or if you have an instance of a model

model.train().then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);
```
</TabItem>

<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp

app = ClarifaiApp(api_key='YOUR_API_KEY')

model = app.models.get('{model_id}')
model.train()
```
</TabItem>

<TabItem value="java" label="Java">

```java
client.trainModel("{model_id}").executeSync();
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs.Predictions;

namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");

            await client.TrainModel<Concept>("{model_id}")
                .ExecuteAsync();
        }
    }
}
```
</TabItem>

<TabItem value="objective-c" label="Objective-C">

```objectivec
ClarifaiImage *image = [[ClarifaiImage alloc] initWithURL:@"https://samples.clarifai.com/puppy.jpeg"]
[app getModel:@"{id}" completion:^(ClarifaiModel *model, NSError *error) {
    [model train:^(ClarifaiModel *model, NSError *error) {
        NSLog(@"model: %@", model);
    }];
}];
```
</TabItem>

<TabItem value="php" label="PHP">

```php
use Clarifai\API\ClarifaiClient;
use Clarifai\DTOs\Models\ModelType;

$client = new ClarifaiClient('YOUR_API_KEY');

$response = $client->trainModel(ModelType::concept(), 'MODEL_ID')
    ->executeSync();

if ($response-> isSuccessful()) {
    echo "Response is successful.\n";
} else {
    echo "Response is not successful. Reason: \n";
    echo $response->status()->description() . "\n";
    echo $response->status()->errorDetails() . "\n";
    echo "Status code: " . $response->status()->statusCode();
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  https://api.clarifai.com/v2/models/pets/versions
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/models/pets/versions`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>

```javascript
status {
  code: SUCCESS
  description: "Ok"
  req_id: "d707b6c108847ccd9891e7ad98f91f98"
}
model {
  id: "my-pets"
  name: "my-pets"
  created_at {
    seconds: 1646291711
    nanos: 640607000
  }
  app_id: "test-app"
  output_info {
    output_config {
    }
    message: "Show output_info with: GET /models/{model_id}/output_info"
    params {
      fields {
        key: "max_concepts"
        value {
          number_value: 20.0
        }
      }
      fields {
        key: "min_value"
        value {
          number_value: 0.0
        }
      }
      fields {
        key: "select_concepts"
        value {
          list_value {
          }
        }
      }
    }
  }
  model_version {
    id: "8eb21f63ba9d40c7b84ecfd664ac603d"
    created_at {
      seconds: 1646330065
      nanos: 537080027
    }
    status {
      code: MODEL_QUEUED_FOR_TRAINING
      description: "Model is currently in queue for training."
    }
    active_concept_count: 1
    visibility {
      gettable: PRIVATE
    }
    app_id: "test-app"
    user_id: "ei2leoz3s3iy"
    metadata {
    }
  }
  user_id: "ei2leoz3s3iy"
  input_info {
  }
  train_info {
  }
  model_type_id: "embedding-classifier"
  visibility {
    gettable: PRIVATE
  }
  metadata {
  }
  modified_at {
    seconds: 1646291711
    nanos: 640607000
  }
  import_info {
  }
}

```
</details>

## Predict With the Model

Now that we have trained the model, we can start making predictions with it. In our predict call, we specify three items: the `model id`, `model version id` \(optional, defaults to the latest trained version\), and the `input` we want a prediction for.

:::note
You can repeat the above steps as often as you like. By adding more images with concepts and training, you can get the model to predict exactly how you want it to.
:::

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonPredictModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(
    PostModelOutputsRequest.newBuilder()
        .setModelId("pets")
        .setVersionId("{YOUR_MODEL_VERSION_ID}")  // This is optional. Defaults to the latest model version.
        .addInputs(
            Input.newBuilder().setData(
                Data.newBuilder().setImage(
                    Image.newBuilder().setUrl("https://samples.clarifai.com/metro-north.jpg")
                )
            )
        )
        .build()
);

if (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post model outputs failed, status: " + postModelOutputsResponse.getStatus());
}

// Since we have one input, one output will exist here.
Output output = postModelOutputsResponse.getOutputs(0);

System.out.println("Predicted concepts:");
for (Concept concept : output.getData().getConceptsList()) {
    System.out.printf("%s %.2f%n", concept.getName(), concept.getValue());
}
```
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostModelOutputs(
    {
        model_id: "pets",
        version_id: "{YOUR_MODEL_VERSION_ID}",  // This is optional. Defaults to the latest model version.
        inputs: [
            {data: {image: {url: "https://samples.clarifai.com/metro-north.jpg"}}}
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post model outputs failed, status: " + response.status.description);
        }

        // Since we have one input, one output will exist here.
        const output = response.outputs[0];

        console.log("Predicted concepts:");
        for (const concept of output.data.concepts) {
            console.log(concept.name + " " + concept.value);
        }
    }
);
```
</TabItem>

<TabItem value="javascript" label="Javascript">

```javascript
let app = new Clarifai.App({apiKey: 'YOUR_API_KEY'});

app.models.predict({id:'MODEL_ID', version:'MODEL_VERSION_ID'}, "https://samples.clarifai.com/metro-north.jpg").then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);
```
</TabItem>

<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp
app = ClarifaiApp(api_key='YOUR_API_KEY')

model = app.models.get('MODEL_ID')
model.model_version = 'MODEL_VERSION_ID'  # This is optional. Defaults to the latest model version.

response = model.predict_by_url('https://samples.clarifai.com/metro-north.jpg')
```
</TabItem>

<TabItem value="java" label="Java">

```java
ModelVersion modelVersion = client.getModelVersionByID("MODEL_ID", "MODEL_VERSION_ID")
        .executeSync()
        .get();

    client.predict("MODEL_ID")
        .withVersion(modelVersion)
        .withInputs(ClarifaiInput.forImage("https://samples.clarifai.com/metro-north.jpg"))
        .executeSync();
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs.Inputs;
using Clarifai.DTOs.Predictions;

namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");

                 var response = await Client.Predict<Concept>(
                    "YOUR_MODEL_ID",
                    new ClarifaiURLImage("https://samples.clarifai.com/metro-north.jpg"),
                    modelVersionID: "MODEL_VERSION_ID")
                  .ExecuteAsync();
        }
    }
}
```
</TabItem>

<TabItem value="objective-c" label="Objective-C">

```objectivec
ClarifaiImage *image = [[ClarifaiImage alloc] initWithURL:@"https://samples.clarifai.com/puppy.jpeg"]
[app getModel:@"{id}" completion:^(ClarifaiModel *model, NSError *error) {
    [model predictOnImages:@[image]
                completion:^(NSArray<ClarifaiSearchResult *> *outputs, NSError *error) {
                    NSLog(@"outputs: %@", outputs);
                }];
}];
```
</TabItem>

<TabItem value="php" label="PHP">

```php
use Clarifai\API\ClarifaiClient;
use Clarifai\DTOs\Inputs\ClarifaiURLImage;
use Clarifai\DTOs\Models\ModelType;
use Clarifai\DTOs\Outputs\ClarifaiOutput;
use Clarifai\DTOs\Predictions\Concept;

$client = new ClarifaiClient('YOUR_API_KEY');

$response = $client->predict(ModelType::concept(), 'MODEL_ID,
        new ClarifaiURLImage('https://samples.clarifai.com/puppy.jpeg'))
    ->executeSync();

if ($response-> isSuccessful()) {
    /** @var ClarifaiOutput $output */
    $output = $response->get();

    echo "Predicted concepts:\n";
    /** @var Concept $concept */
    foreach ($output->data() as $concept) {
        echo $concept->name() . ': ' . $concept->value() . "\n";
    }
} else {
    echo "Response is not successful. Reason: \n";
    echo $response->status()->description() . "\n";
    echo $response->status()->errorDetails() . "\n";
    echo "Status code: " . $response->status()->statusCode();
}
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
            "url": "https://samples.clarifai.com/metro-north.jpg"
          }
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/models/pets/versions/{YOUR_MODEL_VERSION_ID}/outputs
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'

const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "inputs": [
    {
      "data": {
        "image": {
          "url": "https://samples.clarifai.com/metro-north.jpg"
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

fetch(`https://api.clarifai.com/v2/models/pets/versions/{YOUR_MODEL_VERSION_ID}/outputs`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(results))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>

```text
Predicted concepts:
charlie 1.00
```
</details>


<details>
  <summary>JSON Output Example</summary>

```javascript
status {
  code: SUCCESS
  description: "Ok"
  req_id: "db4cf89c13303aa9889a89f2ae0a91f4"
}
outputs {
  id: "20ed3f59dc5b4b1e9082a7e91ff29f48"
  status {
    code: SUCCESS
    description: "Ok"
  }
  created_at {
    seconds: 1646333543
    nanos: 352417324
  }
  model {
    id: "my-pets"
    name: "my-pets"
    created_at {
      seconds: 1646291711
      nanos: 640607000
    }
    app_id: "test-app"
    output_info {
      output_config {
      }
      message: "Show output_info with: GET /models/{model_id}/output_info"
      params {
        fields {
          key: "max_concepts"
          value {
            number_value: 20.0
          }
        }
        fields {
          key: "min_value"
          value {
            number_value: 0.0
          }
        }
        fields {
          key: "select_concepts"
          value {
            list_value {
            }
          }
        }
      }
    }
    model_version {
      id: "8eb21f63ba9d40c7b84ecfd664ac603d"
      created_at {
        seconds: 1646330065
        nanos: 537080000
      }
      status {
        code: MODEL_TRAINED
        description: "Model is trained and ready"
      }
      total_input_count: 14
      completed_at {
        seconds: 1646330068
        nanos: 100250000
      }
      visibility {
        gettable: PRIVATE
      }
      app_id: "test-app"
      user_id: "ei2leoz3s3iy"
      metadata {
      }
    }
    user_id: "ei2leoz3s3iy"
    input_info {
    }
    train_info {
    }
    model_type_id: "embedding-classifier"
    visibility {
      gettable: PRIVATE
    }
    modified_at {
      seconds: 1646291711
      nanos: 640607000
    }
    import_info {
    }
  }
  input {
    id: "f1ce5584c5e54653b722ac3ef163a077"
    data {
      image {
        url: "https://samples.clarifai.com/puppy.jpeg"
      }
    }
  }
  data {
    concepts {
      id: "charlie"
      name: "charlie"
      value: 0.9998574256896973
      app_id: "test-app"
    }
  }
}

```
</details>