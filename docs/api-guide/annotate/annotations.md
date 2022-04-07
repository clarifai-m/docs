---
description: Label your data.
sidebar_position: 1
---

# Annotations

**Label your data**
<hr />

Annotations \(also known as labels\) describe your inputs. When you add inputs to your app, we will create an input level annotation for each input. This input level annotation contains any data you provided in `POST /inputs` call. Models in your default workflow can also write annotations.

Once your input is successfully indexed, you can add additional annotations, such as concepts and bounding boxes.

## Add Annotations

You can label your inputs by calling the `POST /annotations` endpoint. For example, you can add concept\(s\) to an image, draw a bounding box, or label concept\(s\) in a video frame.

When you add an annotation, the app's default workflow will not run by default. This means that the annotation will not be immediately available for training of your custom model or for visual search. 

To make the annotation available for AI based search and training, you need to provide `embed_model_version_id` field. This field specifies how to associate the annotation for your input to one of the embedding models in your default workflow.

When associated during patching, then we know how to index it for training and visual search. Therefore, if your use case includes those features, it is recommended to provide this field on each add annotation call.

You can add from 1 up to 128 annotations in a single API call.

Each annotation should contain at most one region. If it is a video, each annotation should contain 1 frame. If there are multiple regions in a frame you want to label, you can add multiple annotations for each region and each annotation will be contained within the same frame but in a different region.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonAnnotateExistingRegionsImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/annotate_existing_regions_image.py";
import PythonAnnotateImagesConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/annotate_images_concepts.py";
import PythonAnnotateImagesUserIdStatus from "!!raw-loader!../../../code_snippets/api-guide/annotate/annotate_images_user_id_status.py";
import PythonAnnotateNewBoundingBoxesImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/annotate_new_bounding_boxes_image.py";
import PythonbulkDeleteAnnotationsInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/bulk_delete_annotations_input_annotation_ids.py";
import PythonBulkDeleteAnnotationsInputIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/bulk_delete_annotations_input_ids.py";
import PythonDeleteAnnotationInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/delete_annotation_input_annotation_ids.py";
import PythonListAllAnnotationsApp from "!!raw-loader!../../../code_snippets/api-guide/annotate/list_all_annotations_app.py";
import PythonListAnnotationsInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/list_annotations_input_annotation_ids.py";
import PythonListAnnotationsModelVersionIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/list_annotations_model_version_ids.py";
import PythonListAnnotationsUserIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/list_annotations_user_ids.py";
import PythonlistUserCreatedAnnotationsApp from "!!raw-loader!../../../code_snippets/api-guide/annotate/list_user_created_annotations_app.py";
import PythonListUserCreatedAnnotationsInputIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/list_user_created_annotations_input_ids.py";
import PythonUpdateAnnotationConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/update_annotation_concepts.py";
import PythonUpdateAnnotationConceptsRegion from "!!raw-loader!../../../code_snippets/api-guide/annotate/update_annotation_concepts_region.py";
import PythonUpdateAnnotationRegionCoordinates from "!!raw-loader!../../../code_snippets/api-guide/annotate/update_annotation_region_coordinates.py";
import PythonUpdateAnnotationStatus from "!!raw-loader!../../../code_snippets/api-guide/annotate/update_annotation_status.py";


### Annotate Images with Concepts

Below is an example of how to annotate a concept present anywhere in an image.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAnnotateImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import java.util.List;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiAnnotationResponse postAnnotationsResponse = stub.postAnnotations(
    PostAnnotationsRequest.newBuilder().addAnnotations(
        Annotation.newBuilder()
            .setInputId("{YOUR_INPUT_ID}")
            .setData(
                Data.newBuilder().addConcepts(
                    Concept.newBuilder()
                        .setId("tree")
                        .setValue(1f)  // 1 means true, this concept is present.
                        .build()
                    ).addConcepts(
                        Concept.newBuilder()
                            .setId("water")
                            .setValue(0f)  // 0 means false, this concept is not present.
                            .build()
                    )
            ).setEmbedModelVersionId("{EMBED_MODEL_VERSION_ID}") // so the concept can be used for custom model training
            .build()
    ).build()
);

if (postAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post annotations failed, status: " + postAnnotationsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostAnnotations(
    {
        annotations: [
            {
                input_id: "{YOUR_INPUT_ID}",
                // 1 means true, this concept is present.
                // 0 means false, this concept is not present.
                data: {
                    concepts: [
                        {id: "tree", value: 1},
                        {id: "water", value: 0}
                    ]
                },
                embed_model_version_id: "{EMBED_MODEL_VERSION_ID}"
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post annotations failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
# Value of 1 means true, this concept is present.
# Value; of 0 means false, this concept is not present.
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "annotations": [
      {
        "input_id": "{YOUR_INPUT_ID}",
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
        },
        "embed_model_version_id": "{EMBED_MODEL_VERSION_ID}"
      }
    ]
}'\
  https://api.clarifai.com/v2/annotations
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
	"annotations": [
    {
      "input_id": "{YOUR_INPUT_ID}",
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
      },
      "embed_model_version_id": "{EMBED_MODEL_VERSION_ID}"
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

fetch("https://api.clarifai.com/v2/annotations", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Annotate New Bounding Boxes in an Image

Below is an example of how to label a new bounding box by providing bounding box coordinates.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAnnotateNewBoundingBoxesImage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import java.util.List;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiAnnotationResponse postAnnotationsResponse = stub.postAnnotations(
    PostAnnotationsRequest.newBuilder().addAnnotations(
        Annotation.newBuilder()                     // label a region in this image
            .setInputId("{YOUR_INPUT_ID}")
            .setData(
                Data.newBuilder().addRegions(
                    Region.newBuilder()
                        .setRegionInfo(
                            RegionInfo.newBuilder()
                                .setBoundingBox(        // draw a bounding box
                                    BoundingBox.newBuilder()
                                        .setTopRow(0f)
                                        .setLeftCol(0f)
                                        .setBottomRow(0.5f)
                                        .setRightCol(0.5f)
                                        .build()
                                )
                                .build()
                        )
                        .setData(
                            Data.newBuilder()
                                .addConcepts(
                                    Concept.newBuilder()
                                        .setId("tree")
                                        .setValue(1f)  // 1 means true, this concept is present.
                                        .build()
                                )
                                .addConcepts(
                                    Concept.newBuilder()
                                        .setId("water")
                                        .setValue(0f)  // 0 means false, this concept is not present.
                                        .build()
                                )
                        ).build()
                ).build()
            ).setEmbedModelVersionId("{EMBED_MODEL_VERSION_ID}") // so the concept can be used for custom model training
            .build()
    ).addAnnotations(                           // label another region in this image
            .setInputId("{YOUR_INPUT_ID}")
            .setData(
                Data.newBuilder().addRegions(
                    Region.newBuilder()
                        .setRegionInfo(
                            RegionInfo.newBuilder()
                                .setBoundingBox(        // draw another bounding box
                                    BoundingBox.newBuilder()
                                        .setTopRow(0.6f)
                                        .setLeftCol(0.6f)
                                        .setBottomRow(0.8f)
                                        .setRightCol(0.8f)
                                        .build()
                                )
                                .build()
                        )
                        .setData(
                            Data.newBuilder()
                                .addConcepts(
                                    Concept.newBuilder()
                                        .setId("bike")
                                        .setValue(1f)  // 1 means true, this concept is present.
                                        .build()
                                )
                        ).build()
                ).build()
            ).setEmbedModelVersionId("{EMBED_MODEL_VERSION_ID}") // so the concept can be used for custom model training
            .build()
    ).build()
);

if (postAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post annotations failed, status: " + postAnnotationsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostAnnotations(
    {
        annotations: [
            {                     // label a region in this image
                input_id: "{YOUR_INPUT_ID}",
                data: {
                    regions: [
                        {
                            region_info: {
                                bounding_box: {        // draw a bounding box
                                    top_row: 0,
                                    left_col: 0,
                                    bottom_row: 0.5,
                                    right_col: 0.5
                                }
                            }
                            // 1 means true, this concept is present.
                            // 0 means false, this concept is not present.
                            data: {
                                concepts: [
                                    {id: "tree", value: 1},
                                    {id: "water", value: 0}
                                ]
                            },
                        }
                    ]
                }
                embed_model_version_id: "{EMBED_MODEL_VERSION_ID}"
            }, {                     // label another region in this image
                input_id: "{YOUR_INPUT_ID}",
                data: {
                    regions: [
                        {
                            region_info: {
                                bounding_box: {        // draw another bounding box
                                    top_row: 0.6,
                                    left_col: 0.6,
                                    bottom_row: 0.8,
                                    right_col: 0.8
                                }
                            }
                            // 1 means true, this concept is present.
                            // 0 means false, this concept is not present.
                            data: {
                                concepts: [
                                    {id: "bike", value: 1},
                                ]
                            },
                        }
                    ]
                }
                embed_model_version_id: "{EMBED_MODEL_VERSION_ID}"
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post annotations failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
# draw 2 bouding boxes in the same region
# Value of 1 means true, this concept is present.
# Value of 0 means false, this concept is not present.
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "annotations": [
      {
        "input_id": "{YOUR_INPUT_ID}",
        "data": {
          "regions": [
            {
              "region_info": {
                  "bounding_box": {
                      "top_row": 0,
                      "left_col": 0,
                      "bottom_row": 0.5,
                      "right_col": 0.5
                  }
              },
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
          ]
        },
        "embed_model_version_id": "{EMBED_MODEL_VERSION_ID}"
      }, {
        "input_id": "{YOUR_INPUT_ID}",
        "data": {
          "regions": [
            {
              "region_info": {
                  "bounding_box": {
                      "top_row": 0.6,
                      "left_col": 0.6,
                      "bottom_row": 0.8,
                      "right_col": 0.8
                  }
              },
              "data": {
                "concepts": [
                  {
                    "id": "bike",
                    "value": 1
                  }
                ]
              }
            }
          ]
        },
        "embed_model_version_id": "{EMBED_MODEL_VERSION_ID}"
      }
    ]
}'\
  https://api.clarifai.com/v2/annotations
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
	"annotations": [
    {
      "input_id": "{YOUR_INPUT_ID}",
      "data": {
        "regions": [
          {
            "region_info": {
                "bounding_box": {
                    "top_row": 0,
                    "left_col": 0,
                    "bottom_row": 0.5,
                    "right_col": 0.5
                }
            },
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
        ]
      },
      "embed_model_version_id": "{EMBED_MODEL_VERSION_ID}"
    }, {
      "input_id": "{YOUR_INPUT_ID}",
      "data": {
        "regions": [
          {
            "region_info": {
                "bounding_box": {
                    "top_row": 0.6,
                    "left_col": 0.6,
                    "bottom_row": 0.8,
                    "right_col": 0.8
                }
            },
            "data": {
              "concepts": [
                {
                  "id": "bike",
                  "value": 1
                }
              ]
            }
          }
        ]
      },
      "embed_model_version_id": "{EMBED_MODEL_VERSION_ID}"
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

fetch("https://api.clarifai.com/v2/annotations", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Annotate Existing Regions in an Image

When you add an input, detection models \(such as `Face Detection` or `General Detection`\) will detect regions in your image where there appear to be relevant objects. You can check these detected regions by listing model's annotations. 

Your labels should be contained within `Region.data`. Each annotation can have only 1 region. If you want to label multiple regions, it is possible to label multiple annotations in a single API call.

Below is an example of how to annotate existing regions in an image.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAnnotateExistingRegionsImage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import java.util.List;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiAnnotationResponse postAnnotationsResponse = stub.postAnnotations(
    PostAnnotationsRequest.newBuilder().addAnnotations(
        Annotation.newBuilder()                // label a region in this image
            .setInputId("{YOUR_INPUT_ID}")
            .setData(
                Data.newBuilder().addRegions(
                    Region.newBuilder()
                        .setId("{REGION_ID_1}") // this should be a region id returned from list annotations call
                        .setData(
                            Data.newBuilder().addConcepts(
                                Concept.newBuilder()
                                    .setId("tree")
                                    .setValue(1f)  // 1 means true, this concept is present.
                                    .build()
                                ).addConcepts(
                                    Concept.newBuilder()
                                        .setId("water")
                                        .setValue(0f)  // 0 means false, this concept is not present.
                                        .build()
                                )
                        ).build()
                ).build()
            ).setEmbedModelVersionId("{EMBED_MODEL_VERSION_ID}") // so the concept can be used for custom model training
            .build()
    ).AddAnnotations(
        Annotation.newBuilder()                // label another region in the same image
            .setInputId("{YOUR_INPUT_ID}")
            .setData(
                Data.newBuilder().addRegions(
                    Region.newBuilder()
                        .setId("{REGION_ID_2}") // this should be a region id returned from list annotations call
                        .setData(
                            Data.newBuilder().addConcepts(
                                Concept.newBuilder()
                                    .setId("bike")
                                    .setValue(1f)  // 1 means true, this concept is present.
                                    .build()
                                )
                        ).build()
                ).build()
            ).setEmbedModelVersionId("{EMBED_MODEL_VERSION_ID}") // so the concept can be used for custom model training
            .build()
    ).build()
);

if (postAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post annotations failed, status: " + postAnnotationsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostAnnotations(
    {
        annotations: [
            {                // label a region in this image
                input_id: "{YOUR_INPUT_ID}",
                data: {
                    regions: [
                        {
                            id: "{REGION_ID_1}" // this should be a region id  returned from list annotations call
                            // 1 means true, this concept is present.
                            // 0 means false, this concept is not present.
                            data: {
                                concepts: [
                                    {id: "tree", value: 1},
                                    {id: "water", value: 0}
                                ]
                            },
                        }
                    ]
                }
                embed_model_version_id: "{EMBED_MODEL_VERSION_ID}"
            }, {                // label another region in this image
                input_id: "{YOUR_INPUT_ID}",
                data: {
                    regions: [
                        {
                            id: "{REGION_ID_2}" // this should be a region id  returned from list annotations call
                            // 1 means true, this concept is present.
                            // 0 means false, this concept is not present.
                            data: {
                                concepts: [
                                    {id: "bike", value: 1},
                                ]
                            },
                        }
                    ]
                }
                embed_model_version_id: "{EMBED_MODEL_VERSION_ID}"
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post annotations failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
# Value of 1 means true, this concept is present.
# Value of 0 means false, this concept is not present.
# region id should be a region id returned from list annotations call
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "annotations": [
      {
        "input_id": "{YOUR_INPUT_ID}",
        "data": {
          "regions": [
            {
              "id": "{REGION_ID_1}",
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
          ]
        },
        "embed_model_version_id": "{EMBED_MODEL_VERSION_ID}"
      }, {
        "input_id": "{YOUR_INPUT_ID}",
        "data": {
          "regions": [
            {
              "id": "{REGION_ID_2}",
              "data": {
                "concepts": [
                  {
                    "id": "bike",
                    "value": 1
                  }
                ]
              }
            }
          ]
        },
        "embed_model_version_id": "{EMBED_MODEL_VERSION_ID}"
      }
    ]
}'\
  https://api.clarifai.com/v2/annotations
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
	"annotations": [
    {
      "input_id": "{YOUR_INPUT_ID}",
      "data": {
        "regions": [
          {
            "id": "{REGION_ID_1}",
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
        ]
      },
      "embed_model_version_id": "{EMBED_MODEL_VERSION_ID}"
    }, {
      "input_id": "{YOUR_INPUT_ID}",
      "data": {
        "regions": [
          {
            "id": "{REGION_ID_2}",
            "data": {
              "concepts": [
                {
                  "id": "bike",
                  "value": 1
                }
              ]
            }
          }
        ]
      },
      "embed_model_version_id": "{EMBED_MODEL_VERSION_ID}"
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

fetch("https://api.clarifai.com/v2/annotations", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Annotate Images with Different `user_id` and `status`

Each annotation is tied to a user or a model in your workflow. By default, when a user posts an annotation, this user is the owner of the annotation. 

Sometimes, however, you might want to post an annotation as another user; for example, when assigning an image to another user. In such a case, you can create an annotation with another `user_id` \(and status `PENDING`\).

:::note

Only the app owner can post an annotation with other user's `user_id`; collaborators cannot.

:::

Below is an example of how to annotate images with different `user_id` and `status`.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>
<TabItem value="python" label="Python" default>

```python
# Insert here the initialization code as outlined on this page:
# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

post_annotations_response = stub.PostAnnotations(
    service_pb2.PostAnnotationsRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
        annotations=[
            resources_pb2.Annotation(
                input_id="{YOUR_INPUT_ID}",
                user_id="{USER_ID}",    # If empty, it is the user who posts this annotation
                data=status_pb2.Status(
                    code=status_code_pb2.ANNOTATION_PENDING  # annotation pending status. By default success.
                ),
            )
        ]
    ),
    metadata=metadata
)

if post_annotations_response.status.code != status_code_pb2.SUCCESS:
    print("There was an error with your request!")
    print("\tCode: {}".format(post_annotations_response.outputs[0].status.code))
    print("\tDescription: {}".format(post_annotations_response.outputs[0].status.description))
    print("\tDetails: {}".format(post_annotations_response.outputs[0].status.details))
    raise Exception("Post annotations failed, status: " + post_annotations_response.status.description)
```
</TabItem>

<TabItem value="java" label="Java">

```java
import java.util.List;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiAnnotationResponse postAnnotationsResponse = stub.postAnnotations(
    PostAnnotationsRequest.newBuilder().addAnnotations(
        Annotation.newBuilder()
            .setInputId("{YOUR_INPUT_ID}")
            .setUserId("{USER_ID}")  // If empty, it is the user who posts this annotation
            .setStatus(
                Status.newBuilder()
                    .setCodeValue(StatusCode.ANNOTATION_PENDING_VALUE) // annotation pending status. By default, it's ANNOTATION_SUCCESS_VALUE.
                    .build()
            )
            .build()
    ).build()
);

if (postAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post annotations failed, status: " + postAnnotationsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostAnnotations(
    {
        annotations: [
            {
                input_id: "{YOUR_INPUT_ID}",
                user_id: "{USER_ID}",  // If empty, it is the user who posts this annotation
                status: {
                    code: 24151    // annotation pending status. By default success.
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
            throw new Error("Post annotations failed, status: " + response.status.description);
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
    "annotations": [
      {
        "input_id": "{YOUR_INPUT_ID}",
        "user_id": "{USER_ID}",
        "status": {
            "code": "ANNOTATION_PENDING"
        }
      }
    ]
}'\
  https://api.clarifai.com/v2/annotations
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
	"annotations": [
    {
      "input_id": "{YOUR_INPUT_ID}",
      "user_id": "{USER_ID}",
      "status": {
          "code": "ANNOTATION_PENDING"
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

fetch("https://api.clarifai.com/v2/annotations", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## List Annotations

You can get a list of annotations within your app with a GET call. Annotations will be returned from oldest to newest.

These requests are paginated. By default each page will return 20 annotations.

### List All User Created Annotations in Your App

Below is an example of how to list all your user labelled annotations.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

:::note

This will not show annotations by models in your workflow. To include model created annotations, you need to set `list_all_annotations` to `True`.

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonlistUserCreatedAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import java.util.List;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiAnnotationResponse listAnnotationsResponse = stub.listAnnotations(
    ListAnnotationsRequest.newBuilder()
        .setPerPage(10)
        .setPage(1)  // Pages start at 1.
        .build()
);

if (listAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List annotations failed, status: " + listAnnotationsResponse.getStatus());
}

for (Annotation annotation : listAnnotationsResponse.getAnnotationsList()) {
    System.out.println(annotation);
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.ListAnnotations(
    {page: 1, per_page: 10},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List annotations failed, status: " + response.status.description);
        }

        for (const annotation of response.annotations) {
            console.log(JSON.stringify(annotation, null, 2));
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/annotations?page=1&per_page=10
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

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/annotations?page=1&per_page=10`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### List All Annotations in Your App

Below is an example of how to list all annotations, including those created by models.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListAllAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import java.util.List;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiAnnotationResponse listAnnotationsResponse = stub.listAnnotations(
    ListAnnotationsRequest.newBuilder()
        .setPerPage(10)
        .setListAllAnnotations(true)
        .setPage(1)  // Pages start at 1.
        .build()
);

if (listAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List annotations failed, status: " + listAnnotationsResponse.getStatus());
}

for (Annotation annotation : listAnnotationsResponse.getAnnotationsList()) {
    System.out.println(annotation);
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.ListAnnotations(
    {list_all_annotations: true, page: 1, per_page: 10},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List annotations failed, status: " + response.status.description);
        }

        for (const annotation of response.annotations) {
            console.log(JSON.stringify(annotation, null, 2));
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/annotations?page=1&per_page=10&list_all_annotations=true
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

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/annotations?page=1&per_page=10&list_all_annotations=true`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### List User Created Annotations by Input IDs

Below is an example of how to list all user created annotations for certain input \(one or several\) by providing a list of input IDs.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

:::note

This will not show annotations by models in your workflow. To include model created annotations, you need to set `list_all_annotations` to `True`.

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListUserCreatedAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import java.util.List;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiAnnotationResponse listAnnotationsResponse = stub.listAnnotations(
    ListAnnotationsRequest.newBuilder()
        .addInputIds("{YOUR_INPUT_ID_1}")
        .addInputIds("{YOUR_INPUT_ID_2}")
        .setPerPage(10)
        .setPage(1)  // Pages start at 1.
        .build()
);

if (listAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List annotations failed, status: " + listAnnotationsResponse.getStatus());
}

for (Annotation annotation : listAnnotationsResponse.getAnnotationsList()) {
    System.out.println(annotation);
}
```
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.ListAnnotations(
    {input_ids: ["{YOUR_INPUT_ID_2}", "{YOUR_INPUT_ID_2}"], page: 1, per_page: 10},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List annotations failed, status: " + response.status.description);
        }

        for (const annotation of response.annotations) {
            console.log(JSON.stringify(annotation, null, 2));
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/annotations?page=1&per_page=10&input_ids=your_input_Id
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const inputId = '{YOUR_INPUT_ID}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/annotations?page=1&per_page=10&input_ids=${inputId}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### List Annotations by Input IDs and Annotation IDs

You can list annotations by both input IDs and annotation IDs. Number of input IDs and annotation IDs should be the same. Since we are finding annotation by IDs, this will match any user or model created annotations.

Below is an example of how to do that.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import java.util.List;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiAnnotationResponse listAnnotationsResponse = stub.listAnnotations(
    ListAnnotationsRequest.newBuilder()
        .setPerPage(10)
        .addInputIds("{YOUR_INPUT_ID_1}").
        .addInputIds("{YOUR_INPUT_ID_2}").
        .addIds("{YOUR_ANNOTATION_ID_1}")
        .addIds("{YOUR_ANNOTATION_ID_2}")
        .build()
);

if (listAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List annotations failed, status: " + listAnnotationsResponse.getStatus());
}

for (Annotation annotation : listAnnotationsResponse.getAnnotationsList()) {
    System.out.println(annotation);
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.ListAnnotations(
    {
        input_ids: ["{YOUR_INPUT_ID_2}", "{YOUR_INPUT_ID_2}"],
        ids: ["{YOUR_ANNOTATION_ID_1}", "{YOUR_ANNOTATION_ID_2}"],
        page: 1, per_page: 10
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List annotations failed, status: " + response.status.description);
        }

        for (const annotation of response.annotations) {
            console.log(JSON.stringify(annotation, null, 2));
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/annotations?page=1&per_page=10&input_ids=YOUR_INPUT_ID_1&input_ids=YOUR_INPUT_ID_2&ids=YOUR_ANNOTATION_ID_1&ids=YOUR_ANNOTATION_ID_2
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const inputId1 = '{YOUR_INPUT_ID_1}'
const inputId2 = '{YOUR_INPUT_ID_2}'
const annotationId1 = '{YOUR_ANNOTATION_ID_1}'
const annotationId2 = '{YOUR_ANNOTATION_ID_2}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/annotations?page=1&per_page=10&input_ids=${inputId1}&input_ids=${inputId2}&ids=${annotationId1}&ids=${annotationId2}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### List Annotations by User IDs

An annotation is created by either a user or a model. You can list annotations created by specific user\(s\) by providing their user IDs.

Below is an example of how to do that.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListAnnotationsUserIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import java.util.List;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiAnnotationResponse listAnnotationsResponse = stub.listAnnotations(
    ListAnnotationsRequest.newBuilder()
        .addUserIds("{USER_ID_1}")
        .addUserIds("{USER_ID_2}")
        .setPerPage(10)
        .build()
);

if (listAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List annotations failed, status: " + listAnnotationsResponse.getStatus());
}

for (Annotation annotation : listAnnotationsResponse.getAnnotationsList()) {
    System.out.println(annotation);
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.ListAnnotations(
    {user_ids: ["{USER_ID_1}", "{USER_ID_2}"], page: 1, per_page: 10},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List annotations failed, status: " + response.status.description);
        }

        for (const annotation of response.annotations) {
            console.log(JSON.stringify(annotation, null, 2));
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/annotations?page=1&per_page=10&user_ids=USER_ID_1&user_ids=USER_ID_2
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const userId1 = '{USER_ID_1}'
const userId2 = '{USER_ID_2}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/annotations?page=1&per_page=10&user_ids=${userId1}&user_ids=${userId2}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### List Annotations by Model Version IDs

An annotation is created by either a user or a model. For example, if your workflow has a detection model, when you add an input, the model will detect objects in your input. You can see these detected objects by listing the annotations created in the detection model. 

You can also label these regions by using `Post annotation` with the region ID returned from this call.

Below is an example of how to list annotations by model version IDs.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListAnnotationsModelVersionIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import java.util.List;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiAnnotationResponse listAnnotationsResponse = stub.listAnnotations(
    ListAnnotationsRequest.newBuilder()
        .addModelVersionIds("{MODEL_VERSION_ID_1}")
        .addModelVersionIds("{MODEL_VERSION_ID_2}")
        .setPerPage(10)
        .build()
);

if (listAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List annotations failed, status: " + listAnnotationsResponse.getStatus());
}

for (Annotation annotation : listAnnotationsResponse.getAnnotationsList()) {
    System.out.println(annotation);
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.ListAnnotations(
    {model_version_ids: ["{MODEL_VERSION_ID_1}", "{MODEL_VERSION_ID_2}"], page: 1, per_page: 10},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List annotations failed, status: " + response.status.description);
        }

        for (const annotation of response.annotations) {
            console.log(JSON.stringify(annotation, null, 2));
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/annotations?page=1&per_page=10&model_version_ids=MODEL_VERSION_ID_1&model_version_ids=MODEL_VERSION_ID_2
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const modelVersionId1 = '{MODEL_VERSION_ID_1}'
const modelVersionId2 = '{MODEL_VERSION_ID_2}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/annotations?page=1&per_page=10&model_version_ids=${modelVersionId1}&model_version_ids=${modelVersionId1}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## Update Annotations

Changing annotation data is possible by PATCHing existing annotations. The application owner can change any user-created annotations. Collaborators are not allowed to change annotations made by other collaborators.

Generally speaking, you should send PATCH when you want to change the data you have posted; for example, changing the concept from positive to negative or adjusting the bounding box coordinates. 

If you want to add more tags, you can always POST new annotations. There is no limit on how many annotations an input can have.

Update supports `overwrite`, `merge`, and `remove` actions. You can update from 1 up to 128 annotations in a single API call.

### Update Annotation with Concepts

Below is an example of how to update an annotation of an image with a new concept, or  change a concept value from true to false \(or vice versa\).

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateAnnotationConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import java.util.List;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiAnnotationResponse patchAnnotationsResponse = stub.patchAnnotations(
    PatchAnnotationsRequest.newBuilder()
        .setAction("merge")  // Supported actions: overwrite, merge, remove.
        .addAnnotations(
        Annotation.newBuilder()
            .setInputId("{YOUR_INPUT_ID}")
            .setId("{YOUR_ANNOTATION_ID}")
            .setData(
                Data.newBuilder().addConcepts(
                    Concept.newBuilder()
                        .setId("apple")
                        .setValue(1f)  // 1 means true, this concept is present.
                        .build()
                    )
            )
            .build()
    ).build()
);

if (patchAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Patch annotations failed, status: " + patchAnnotationsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PatchAnnotations(
    {
        action: "merge",  // Supported actions: overwrite, merge, remove.
        annotations: [
            {
                input_id: "{YOUR_INPUT_ID}",
                id: "{YOUR_ANNOTATION_ID}",
                // 1 means true, this concept is present.
                // 0 means false, this concept is not present.
                data: {
                    concepts: [
                        {id: "apple", value: 1}
                    ]
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
            throw new Error("Patch annotations failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
# Value of 1 means true, this concept is present.
# Value of 0 means false, this concept is not present.
curl -X PATCH \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "annotations": [
      {
        "input_id": "{YOUR_INPUT_ID}",
        "id": "{YOUR_ANNOTATION_ID}",
        "data": {
          "concepts": [
            {
              "id": "apple",
              "value": 1
            }
          ]
        }
      }
    ],
    "action":"merge"
}'\
  https://api.clarifai.com/v2/annotations
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
	"annotations": [
    {
      "input_id": "{YOUR_INPUT_ID}",
      "id": "{YOUR_ANNOTATION_ID}",
      "data": {
        "concepts": [
          {
            "id": "apple",
            "value": 1
          }
        ]
      }
    }
  ],
  "action":"merge"
});

const requestOptions = {
  method: 'PATCH',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/annotations", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Update Annotation with Concepts in a Region

When you update region data, you must nest this new data within `region.data`. Set the `region_id` to the current `region_id` if you do not want to change or remove this region.

Below is an example of how to update annotation with concepts in a region.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateAnnotationConceptsRegion}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import java.util.List;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiAnnotationResponse patchAnnotationsResponse = stub.patchAnnotations(
    PatchAnnotationsRequest.newBuilder()
        .setAction("merge")  // Supported actions: overwrite, merge, remove.
        .addAnnotations(
            Annotation.newBuilder()
                .setInputId("{YOUR_INPUT_ID}")
                .setId("{YOUR_ANNOTATION_ID}")
                .setData(
                    Data.newBuilder().addRegions(
                        Region.newBuilder()
                            .setId("{REGION_ID}") // this should be the region id of this annotation
                            .setData(
                                Data.newBuilder().addConcepts(
                                    Concept.newBuilder()
                                        .setId("apple")
                                        .setValue(1f)  // 1 means true, this concept is present.
                                        .build()
                                    )
                            ).build()
                    ).build()
                )
                .build()
    ).build()
);

if (patchAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Patch annotations failed, status: " + patchAnnotationsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PatchAnnotations(
    {
        action: "merge",  // Supported actions: overwrite, merge, remove.
        annotations: [
            {
                input_id: "{YOUR_INPUT_ID}",
                id: "{YOUR_ANNOTATION_ID}",
                data: {
                    regions: [
                        {
                            id: "{REGION_ID}" // this should be the region id of this annotation before patch
                            // 1 means true, this concept is present.
                            data: {
                                concepts: [
                                    {id: "apple", value: 1},
                                ]
                            },
                        }
                    ]
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
            throw new Error("Patch annotations failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
# Value of 1 means true, this concept is present.
# region id should be the region id of this annotation before patch
curl -X PATCH \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "annotations": [
      {
        "input_id": "{YOUR_INPUT_ID}",
        "id": "{YOUR_ANNOTATION_ID}",
        "data": {
          "regions": [
            {
              "id": "{REGION_ID}",
              "data": {
                "concepts": [
                  {
                    "id": "apple",
                    "value": 1
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    "action":"merge"
}'\
  https://api.clarifai.com/v2/annotations
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
	"annotations": [
    {
      "input_id": "{YOUR_INPUT_ID}",
      "id": "{YOUR_ANNOTATION_ID}",
      "data": {
        "regions": [
          {
            "id": "{REGION_ID}",
            "data": {
              "concepts": [
                {
                  "id": "apple",
                  "value": 1
                }
              ]
            }
          }
        ]
      }
    }
  ],
  "action":"merge"
});

const requestOptions = {
  method: 'PATCH',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/annotations", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Update Annotation Region Coordinates

You can update region bounding boxes coordinates. When changing the region, you should use `overwrite` action. With `overwrite` action, you need to provide the data you want to keep in this annotation.

Below is an example of how to do that.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateAnnotationRegionCoordinates}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import java.util.List;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiAnnotationResponse patchAnnotationsResponse = stub.patchAnnotations(
    PatchAnnotationsRequest.newBuilder()
        .setAction("overwrite")
        .addAnnotations(
            Annotation.newBuilder()
                .setInputId("{YOUR_INPUT_ID}")
                .setId("{YOUR_ANNOTATION_ID}")
                .setData(
                    Data.newBuilder().addRegions(
                        Region.newBuilder()
                            .setRegionInfo(
                                RegionInfo.newBuilder()
                                    .setBoundingBox(        // move bounding box to a new cooridnates
                                        BoundingBox.newBuilder()
                                            .setTopRow(0.5f)
                                            .setLeftCol(0.5f)
                                            .setBottomRow(0.8f)
                                            .setRightCol(0.8f)
                                            .build()
                                    )
                                    .build()
                            )
                            .setData(
                                Data.newBuilder()
                                    .addConcepts(
                                        Concept.newBuilder()
                                            .setId("bike")
                                            .setValue(1f)  // 1 means true, this concept is present.
                                            .build()
                                    )
                            ).build()
                    ).build()
                )
                .build()
    ).build()
);

if (patchAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Patch annotations failed, status: " + patchAnnotationsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PatchAnnotations(
    {
        action: "overwrite",
        annotations: [
            {
                input_id: "{YOUR_INPUT_ID}",
                id: "{YOUR_ANNOTATION_ID}",
                data: {
                    regions: [
                        {
                            region_info: {
                                bounding_box: {        // move bounding box to a new coordiates
                                    top_row: 0.5,
                                    left_col: 0.5,
                                    bottom_row: 0.8
                                    right_col: 0.8
                                }
                            }
                            // 1 means true, this concept is present.
                            // 0 means false, this concept is not present.
                            data: {
                                concepts: [
                                    {id: "bike", value: 1},
                                ]
                            },
                        }
                    ]
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
            throw new Error("Patch annotations failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
# Value of 1 means true, this concept is present.
# region id should be the region id of this annotation before patch
curl -X PATCH \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "annotations": [
      {
        "input_id": "{YOUR_INPUT_ID}",
        "id": "{YOUR_ANNOTATION_ID}",
        "data": {
          "regions": [
            {
              "id": "{REGION_ID}",
              "data": {
                "concepts": [
                  {
                    "id": "apple",
                    "value": 1
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    "action":"merge"
}'\
  https://api.clarifai.com/v2/annotations
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
	"annotations": [
    {
      "data": {
			"regions": [{
				"region_info": {
					"bounding_box": {
						"top_row": 0,
						"left_col": 0,
						"bottom_row": 1,
						"right_col": 1
					}
				},
				"data": {
					"concepts": [{
						"id": "{{concept_id}}",
						"name": "{{concept_id}}",
						"value": 1
					}]
				}
			}]
		},
		"input_id": "{{asset_id}}"
    }
  ]
});

const requestOptions = {
  method: 'PATCH',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/annotations", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Update Annotation Status

Below is an example of how to update an annotation status.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>
<TabItem value="python" label="Python" default>

```python
# Insert here the initialization code as outlined on this page:
# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

patch_annotations_response = stub.PatchAnnotations(
    service_pb2.PatchAnnotationsRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
        action="merge",  # Supported actions: overwrite, merge, remove.
        annotations=[
            resources_pb2.Annotation(
                input_id="{YOUR_INPUT_ID}",
                id="{YOUR_ANNOTATION_ID}",
                status=status_pb2.Status(
                    code=status_code_pb2.ANNOTATION_SUCCESS
                )
            )
        ]
    ),
    metadata=metadata
)

if patch_annotations_response.status.code != status_code_pb2.SUCCESS:
    print("There was an error with your request!")
    print("\tCode: {}".format(patch_annotations_response.outputs[0].status.code))
    print("\tDescription: {}".format(patch_annotations_response.outputs[0].status.description))
    print("\tDetails: {}".format(patch_annotations_response.outputs[0].status.details))
    raise Exception("Patch annotations failed, status: " + patch_annotations_response.status.description)
```
</TabItem>

<TabItem value="java" label="Java">

```java
import java.util.List;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiAnnotationResponse patchAnnotationsResponse = stub.patchAnnotations(
    PatchAnnotationsRequest.newBuilder()
        .setAction("merge")  // Supported actions: overwrite, merge, remove.
        .addAnnotations(
        Annotation.newBuilder()
            .setInputId("{YOUR_INPUT_ID}")
            .setId("{YOUR_ANNOTATION_ID}")
            .setStatus(
                Status.newBuilder()
                    .setCodeValue(StatusCode.ANNOTATION_SUCCESS_VALUE)
                    .build()
            )
            .build()
    ).build()
);

if (patchAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("patch annotations failed, status: " + patchAnnotationsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PatchAnnotations(
    {
        action: "merge",  // Supported actions: overwrite, merge, remove.
        annotations: [
            {
                input_id: "{YOUR_INPUT_ID}",
                id: "{YOUR_ANNOTATION_ID}",
                status: {
                    code: 24150
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
            throw new Error("Patch annotations failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X PATCH \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "annotations": [
      {
        "input_id": "{YOUR_INPUT_ID}",
        "id": "{YOUR_ANNOTATION_ID}",
        "status": {
          "code": "ANNOTATION_SUCCESS"
        }
      }
    ],
    "action":"merge"
}'\
  https://api.clarifai.com/v2/annotations
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
	"annotations": [
    {
      "input_id": "{YOUR_INPUT_ID}",
      "id": "{YOUR_ANNOTATION_ID}",
      "status": {
        "code": "ANNOTATION_SUCCESS"
      }
    }
  ],
  "action":"merge"
});

const requestOptions = {
  method: 'PATCH',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/annotations", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## Delete Annotations

### Delete Annotation by Input ID and Annotation ID

Below is an example of how to delete a single annotation by input ID and annotation ID.

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteAnnotationInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

BaseResponse deleteAnnotationResponse = stub.deleteAnnotation(
    DeleteAnnotationRequest.newBuilder()
        .setInputId("{YOUR_INPUT_ID}")
        .setAnnotationId("{YOUR_ANNOTATION_ID}")
        .build()
);

if (deleteAnnotationResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Delete annotation failed, status: " + deleteAnnotationResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.DeleteAnnotation(
    {
        input_id: "{YOUR_INPUT_ID}",
        annotation_id: "{YOUR_ANNOTATION_ID}"
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Delete annotation failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X DELETE \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/inputs/{YOUR_INPUT_ID}/annotations/{YOUR_ANNOTATION_ID}
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const inputId = '{YOUR_INPUT_ID}'
const annotationId = '{YOUR_ANNOTATION_ID}'

const requestOptions = {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/inputs/${inputId}/annotations/${annotationId}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Bulk Delete Annotations by Input IDs and Annotation IDs

You can delete multiple annotations in one API call. You need to provide a list of input IDs and a list of annotation IDs. The number of input IDs has to match the number of annotation IDs.

Below is an example of how to do that. 

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>
<TabItem value="python" label="Python" default>

```python
# Insert here the initialization code as outlined on this page:
# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

delete_annotations_response = stub.DeleteAnnotations(
    service_pb2.DeleteAnnotationsRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
        input_ids=["{YOUR_INPUT_ID_1}", "{YOUR_INPUT_ID_2}"],
        annotation_id=["{YOUR_ANNOTATION_ID_1}", "{YOUR_ANNOTATION_ID_2}"]
    ),
    metadata=metadata
)

if delete_annotations_response.status.code != status_code_pb2.SUCCESS:
    print("There was an error with your request!")
    print("\tCode: {}".format(delete_annotation_response.outputs[0].status.code))
    print("\tDescription: {}".format(delete_annotation_response.outputs[0].status.description))
    print("\tDetails: {}".format(delete_annotation_response.outputs[0].status.details))
    raise Exception("Delete annotations failed, status: " + delete_annotations_response.status.description)
```
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

BaseResponse deleteAnnotationsResponse = stub.deleteAnnotations(
    DeleteAnnotationsRequest.newBuilder()
        .addInputIds("{YOUR_INPUT_ID_1}")
        .addInputIds("{YOUR_INPUT_ID_2}")
        .addIds("{YOUR_ANNOTATION_ID_1}")
        .addIds("{YOUR_ANNOTATION_ID_2}")
        .build()
);

if (deleteAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Delete annotations failed, status: " + deleteAnnotationsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.DeleteAnnotations(
    {
        input_ids: ["{YOUR_INPUT_ID_1}", "{YOUR_INPUT_ID_2}"],
        annotation_ids: ["{YOUR_ANNOTATION_ID_1}", "{YOUR_ANNOTATION_ID_2}"]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Delete annotations failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X DELETE \
  -H "Authorization: Key YOUR_API_KEY" \
  -d '
  {
    "input_ids":["{YOUR_INPUT_ID_1}","{YOUR_INPUT_ID_2}"],
    "ids":["{YOUR_ANNOTATION_ID_1}", "{YOUR_ANNOTATION_ID_2}"]
  }'\
  https://api.clarifai.com/v2/annotations
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
	"input_ids":["{YOUR_INPUT_ID_1}","{YOUR_INPUT_ID_2}"],
  "ids":["{YOUR_ANNOTATION_ID_1}", "{YOUR_ANNOTATION_ID_2}"]
});

const requestOptions = {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/annotations", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Bulk Delete All Annotations by Input IDs

To delete all annotations of a given input, you just need to set their input ID\(s\). This will delete all annotations for these input\(s\) EXCEPT input level annotations, which only get deleted if you delete the inputs themselves.

Below is an example of how to do that. 

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonBulkDeleteAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

BaseResponse deleteAnnotationsResponse = stub.deleteAnnotations(
    DeleteAnnotationsRequest.newBuilder()
        .addInputIds("{YOUR_INPUT_ID_1}")
        .addInputIds("{YOUR_INPUT_ID_2}")
        .build()
);

if (deleteAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Delete annotations failed, status: " + deleteAnnotationsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.DeleteAnnotations(
    {
        input_ids: ["{YOUR_INPUT_ID_1}", "{YOUR_INPUT_ID_2}"]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Delete annotations failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X DELETE \
  -H "Authorization: Key YOUR_API_KEY" \
  -d '
  {
    "input_ids":["{YOUR_INPUT_ID_1}","{YOUR_INPUT_ID_2}"]
  }'\
  https://api.clarifai.com/v2/annotations
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
	"input_ids":["{YOUR_INPUT_ID_1}","{YOUR_INPUT_ID_2}"]
});

const requestOptions = {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/annotations", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>