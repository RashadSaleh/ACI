# ACI Theory

## How do we form knowledge?

*(Partial Summarization of Objectivist Epistemology)*

Humans form knowledge in three steps.

The first step is to detect individual sensory data, such as individual photons, individual soundwaves, etc. This step is performed by a sense organ. This step is called "sensation".

The second step is to detect individual objects, such as a chair, a car, etc. This step is performed by the brain. This step is called "perception".

The first step is unconscious (we are not directly aware of it), while the second step is. In other words, and taking sight as an example, in normal everyday life, what we experience through the senses is not merely the detection of the existence (or lack thereof) of a photon or a group of them, but the perception of an entire object.

Before going into the third step, we shall explain more deeply the nature of and the relationship between the first and second steps. For this, we imagine a metallic spoon rotating under a light source. For a stationary observer fixating upon the spoon, the spoon will reflect different photons from the light source towards the observer's eye, and thus an array of different still images. Depending on the irregularity of the spoon's rotation, these images might never or seldom repeat. The eye captures those images, but they are not yet ready for conscious awareness.
The eye's task therefore is to distinguish types of photons, and to detect whether they exist or not (sensation). However, no image is actually experienced yet in conscious awareness. For that to happen, the brain first processes the raw images detected by the eye through a process of object delimination and detection.
Thus, while the eye will see a constantly changing array of different colors that seem to come from nowhere, the observer's consciousness will be aware of a single object that is the one spoon (perception), which remains the same spoon to them even if it is rotating.

The process of turning the many images into one is called "integration".

The third step is to classify detected objects into "concepts". This step is called "concept formation".

Concept formation is done consciously through a process of reasoning and experimentation. This process consists of comparing the properties of the yet-to-be-classified objects, while omitting the particular measurements of such properties. If the properties match, then they are classified together. If the properties differ, then they cannot be classified together.
To illustrate, we imagine an ice cube, a glass of water and a glass of alcohol. Perceptually, the two glasses (their contents) are similar, while the ice cube is different. For example, it is in a solid state while the other two are liquids. It is also colder to the touch, and the size might be smaller.

However, from basic chemistry, we know that we ought to classify the ice cube with the water, and leave the alcohol in a second category (H2O vs C2H5OH). This is because after enough investigation (including conducting experiments) we conclude that the properties of both the water and the ice cube are exactly the same, albeit existing at different measurements of such properties (such as the measurement of the property of temperature), while the properties of alcohol do differ.

*Reviewed for clarity and consistency by the kind individuals:*

- Mariyah Mansuri
- Random Stranger

*Typo fixers:*

- Amir
- Shlomi Fish (http://www.shlomifish.org/)

## Natural vs Artificial Agents

We define an agent as an entity that performs the functions of Sensation, Perception and Concept-Formation.

We describe a human mind performing these three functions verbally:

A person looks at a candle and a light bulb. The person’s eye is able to capture both, but the image is flipped by the eye’s lens. The person’s brain automatically corrects the image from the eye, as well as recognize that there are two distinct objects in its field of vision (the candle and the light bulb) — A process of Perception. While perceiving the two objects as distinct, the person uses their conceptual faculty to set aside all differences in shape, color, size, etc, and focuses on the fact that the two emit their own light, therefor forming the concept of a Light Source.

We illustrate this process with the following Mind Map:

<img width="927" alt="Mind Map" src="https://github.com/RashadSaleh/ACI/assets/12851655/57320e98-f90d-4f84-8aab-6eb0af1739d7">

We further express this Mind Map in functional form:

*Concept-Formation( Perception( Sensation( [candle, light bulb] ) ) ) = Light Source*

Which allows us to more easily generalize it to any set of objects outputting any set of concepts:

*Conceptualization(Perception(Sensation(object[]))) = concept[]*

For an artificial agent, Sensation will be done with a camera instead of an eye. Perception will be done with a Machine-Learning based Neural Network (with the task of not recognizing objects by name — but recognizing that they are objects distinct from each other). Conceptualization will be done by the *ACI Algorithm*.

| Person                                           | ACI                                                     |
|--------------------------------------------------|---------------------------------------------------------|
| Eye                                              | Camera                                                  |
| Perceptual Brain                                 | Traditional AI (Machine Learning, Neural Networks, ...) |
| Conceptual Faculty (Method of Concept-Formation) | ACI Algorithm                                           |

Cameras have been around for a long time, and object-detection machine-learning-based neural networks has been around for some time also, and therefor those two will be assumed to be solved problems here. *The chapter called ACI Algorithm provides the solution for the last part. With this solution, the process becomes complete.*

However, we will later see that those three functions alone, while sufficient, are not efficient as objects[] grow in length. Therefor, an extra module will be added to make the agent more efficient. This efficiency will represent the quantifiable intelligence (fitness) of the agent.

Further, this all is assuming a *passive agent*. In reality, to conclude that the two objects are emitting light, the person needs to conduct experiments like darkening the room or putting barriers between the two objects, and only after that make the conclusion that they emit their own light rather than just reflect light coming from other sources (We are assuming an agent that has never seen a light bulb or a candle before, as we should). This makes the agent an *active* one.

Therefor, for an ACI agent to be able to form its concepts, it will need to be an active agent, rather than a passive one, just like a modern scientist.

A passive agent is an agent that perceives the environment but does not change the environment to obtain new perceptions, while an active agent manipulates its environment to obtain new perceptions.

## Fundamental Theorem of ACI

We can describe the objects in the previous example in tabular form:

| object       	| property    	| measurement 	|
|--------------	|-------------	|-------------	|
| liquid water 	| temperature 	| 20 C        	|
| ice cube     	| temperature 	| -10 C       	|
| alcohol      	| temperature 	| 20 C        	|

and of course there will be many more properties for these objects other than temperature.

But we can also represent the previous table in this form:

```
liquidWater = {
    temperature: 20
}

iceCube = {
    temperature: -10
}

alcohol = {
    temperature: 20
}
```

or in general:

```
object1 = {
    property1: measurement1,
    property2: measurement2,
    .
    .
    .
}

object2 = {
    property1: measurement1,
    property2: measurement2,
    .
    .
    .
}

.
.
.
```

In other words, "objects" are a list of properties with their measurements.

If we ommit the measurements (allow them to take any value), then we get a "class" of objects instead:

```
class Class1 {
    property1;
    property2;
    property3;
    .
    .
    .
}
```

but this class is also a concept definition, per the previous chapter. Therefor, we conclude the following Fundamental Theorem of ACI:

> An OOP class is a concept definition.

## Differences Between ACI And Traditional AI

Already we can find crucial differences between ACI and current AI.

The first difference is that *current AI performs the functions of Perception* — it takes sensory data and processes it to recognize an object, recognize differences in sizes, recognize depth of field of vision, direction a sound is coming from, etc. ACI on the other hand takes perceptual data and turns it into concepts, and therefor *performs the function of Concept Formation*.

Concept-Formation and Perception are two different processes. Traditional AI researchers are currently looking for a Perceptual solution to a Conceptual problem. This is a hard limit on what traditional AI can do, and therefor any advances in traditional AI I believe will never result in a AGI. This is also why ACI is a candidate for AGI — no matter what the perceptual environment is, the ACI Algorithm remains the same.

The other difference is that a traditional AI agent is primarily passive, while ACI will be primarily active. This means that an ACI agent needs to be a mechanical robot, not merely a piece of software, since it will be conducting its own experiments.

## ACI Algorithm

The ACI Algorithm is an algorithm that can be run on a computer to turn perceptual data into conceptual knowledge. To do this, we use the Fundamental Theorem of ACI to recognize that OOP classes are concept definitions, and further recognize perceptual data as OOP objects. Then, the problem statement becomes:

> Find an algorithm that writes valid classes for untyped objects.

Or more sophisticatedly:

> Given an array of untyped objects, write classes such that every object can be instantiated from one of those classes while keeping the number of classes at a minimum.

I give [this implementation](./acia.js) in JavaScript. Other implementations should be possible, even in the same language.

We can note here that current programming languages are typically designed so that the programmer is writing the classes, and the program makes use of them at runtime. Meanwhile, the goal of the ACI Algorithm is the reverse. This can be worked around today in languages like JavaScript with some `eval` magic, and perhaps other methods as well. Ideally, it might be desirable to develop a new programming language with a new syntax and focus on the program generating its own classes dynamically at runtime.

## Machine/Human Intelligence Interaction

The output of ACI, which is the OOP classes, already exists in both machine and human readable form. This allows for communication both ways between the human and the machine: The machine can tell us about new concepts that we have no knowledge of as of yet, and the human can also give concepts to the machine as any OOP programmer does in his field of work on a daily basis.

Also, simple classes that only list properties and have minimal functional code can be understood by non-OOP programmers with little training. There is no reason a chemist or a physicist or an accountant cannot be taught to read such classes without much help from an OOP programmer.

Remains however a problem of naming. If we start with a machine that has no conceptual knowledge whatsoever (either provided by a human or learned through the ACI Algorithm), the choice of names for the classes it will write will be arbitrary. (For example, the first class it discovers it will call “A”, the second “B”, etc). For a human, “A” could be “Mountain”, and “B” be “Turtle”. Therefor, a method needs to be developed so that the machine can point at real world objects described by the class, or otherwise explain itself so that the names are not an issue any more.

## The Efficiency Problem

As an active agent, ACI needs to make a choice of experiment from a potentially infinite pool. This is an efficiency problem, and without a solution ACI will be practically useless.

## Implementation Ideas

For a prototype, the mechanical part of ACI can be replaced with a human assistant that executes its commands of manipulating the environment. This will also be a safety measure for the early stages of implementation, as experiments that might result in destruction are easier to prevent. An example is the experiment "burn the assistant to find out if they are made of carbon."
