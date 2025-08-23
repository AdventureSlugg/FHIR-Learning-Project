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
When learning more about how to use fire.ly, I started at the [Fire.ly Server Documentation](https://docs.fire.ly/projects/Firely-Server/en/latest/index.html) and read throw the overview, getting started, and set up steps.