# Overview
I wanted to learn a bit more about the FHIR standard, so I decided to do a small project to gain a bit more exposure to it.

Before I could determine what project I would create, I needed to understand more about what FHIR is and how it is used, so I started by looking into what it is.

___
# What I Discovered
### FHIR Standard
**FHIR** stands for **Fast Healthcare Interoperability Resources**, created from the **HL7 standard** (the same organization behind HL7 v2, CDA, and HL7 v3). The FHIR standard is a set of rules and specifications used to securely exchange electronic healthcare data.

We can understand FHIR better by breaking the name down into pieces.
- **Fast** - The **HL7** (Health Level 7) standard, the global standard for transferring electronic healthcare data, tends to be bulky and is slow to implement. In order to address this, the FHIR standard was designed to be **developer friendly**, resulting in a **quicker integration** into apps, APIs, and **EHR** (Electronic Health Record) systems
- **Healthcare** - The domain of the data being accessed and exchanged, including information like patient information, practitioner information, and organization information.
- **Interoperability** - The intent of **compatibility** among different systems, compatible with other FHIR systems, some older HL7 standards, as well as the older **CDA** (Clinical Document Architecture) standard.
- **Resources** - Refers to what is being exchanged under FHIR.
In other words, *FHIR is a developer-friendly healthcare data exchange standard that is designed to bridge gaps between older standards like HL7 v2, CDA, and HL7 v3.* 

___
# Finding Public FHIR Sandboxes
After understanding the purpose of FHIR a bit better, I wanted to dive in and learn more about how it is used in practice, so I started looking into some free FHIR compliant API's I could use. This search led me to the [HL7 Public Test Servers confluence page](https://confluence.hl7.org/spaces/FHIR/pages/35718859/Public+Test+Servers), which provides list of FHIR compliant test servers.

### Fire.ly
That is where I came across [fire.ly](https://fire.ly/), a platform that not only provides public FHIR testing servers, but also the tools to spin up and manage your own FHIR compatible server. They offer a [few different packages](https://fire.ly/packages/) on their website, which can help reduce development time and allow developers at Flagler to focus on building new features rather than spending time on FHIR compliance.

### Options Besides Fire.ly
Since I was primarily focusing on creating a simple project, I didn't dive too deep into other options. Here are a few other platforms I haven't looked into in depth:
- **In-house FHIR compliance** - Lot's over overhead, but more control.
- **Cloud Options** - Easy to use, but can be pricy
	- [Azure Health Data Services](https://azure.microsoft.com/en-us/products/health-data-services/)
	- [AWS HealthLake](https://aws.amazon.com/healthlake/)
	- [Google Cloud Healthcare API](https://cloud.google.com/healthcare-api?hl=en)
- Cloud and Local Options - Easy to use, moderate pricing
	- [Health Samurai Aidbox](https://www.health-samurai.io/fhir-server)
	- [HAPI FHIR - open source](https://hapifhir.io/)

___
# Using Fire.ly Testing Server
To get started, I clicked on the [fire.ly server link](https://server.fire.ly/), which took me to an information page that looked like this:

![Fire.ly Server Info Page](https://github.com/AdventureSlugg/FHIR-Learning-Project/blob/main/README-images/Firely%20Server%20Page.png)

Clicking on the `View Capabilities` button led me to the list of endpoints I was looking for under the `REST Mode: Server` section of the modal. 

_Note: The [HL7 CapabilityStatement Requirements](https://hl7.org/fhir/us/core/STU8/CapabilityStatement-us-core-server.html) requires FHIR compliant 	systems to contain a CapabilityStatement which lays out what the server is capable of and what resources are accessible._

To try it out, I sent a curl command to access the `Account` endpoint, and sure enough, I got a response!

Curl Command:
```bash
curl -X GET "https://server.fire.ly/Account" -H "Accept: application/json"
```

I tried with a few other endpoints like `Patient`, `Medication`, and `Specimen`, which all returned data I could potentially use. Now that I knew what I was working with, I could start to figure out what I wanted to create.

# What I Built
Flagler Health’s mission is to streamline patient care and improve outcomes using cutting-edge technology. One of the key ways this is achieved is by triaging patients to the appropriate provider quickly and efficiently.

To further enhance patient survival rate in critical and unexpected situations, I developed an application that continuously monitors patients' biometric data from any IoT-enabled device integrated with TerraAPI, such as smartwatches, medical wearables, and smartphones. The app uses AI to assess the patient’s health status in real-time. If the system detects any signs of critical conditions, both the patient and their healthcare provider are immediately alerted, enabling faster intervention when it matters most.