import type { IExperience } from '$lib/component/experience.svelte';

export const experience: IExperience[] = [
	{
		"enterprise": "PerfectStay",
		"position": "Golang Developer",
		"startDate": new Date("2024-08-26"),
		"endDate": new Date("2025-03-24"),
		"description": "As a Golang Developer at PerfectStay, a B2B2C travel agency, I contributed to the development of a comprehensive travel booking system. My responsibilities included building data ingestion services, implementing request monitoring, and automating infrastructure deployments.",
		"missions": [
			{
				"title": "Request Monitoring Service",
				"description": "Developed a request monitoring service in Go, leveraging the `net/http` transport to capture and analyze inbound and outbound HTTP traffic to external and internal services. Visualized data using `templ` and persisted metrics to Redis, providing real-time insights into service performance and dependencies. Deployed the service as an AWS Lambda function.",
				"skills": [
					{
						"name": "golang",
						"category": "backend"
					},
					{
						"name": "redis",
						"category": "data"
					},
					{
						"name": "aws lambda",
						"category": "devops"
					},
					{
						"name": "templ",
						"category": "frontend"
					}
				],
				"snapshot": true
			},
			{
				"title": "Data Ingestion Services",
				"description": "Designed and implemented two Go-based data ingestion services to process large CSV datasets (1M+ rows) and create entities in MongoDB. Integrated with multiple external APIs (Giata, TripAdvisor) to enrich data and ensure accuracy, utilizing a combination of AWS Lambda and container in a ECS (Fargate) for orchestration.",
				"skills": [
					{
						"name": "golang",
						"category": "backend"
					},
					{
						"name": "mongodb",
						"category": "data"
					},
					{
						"name": "aws lambda",
						"category": "devops"
					},
					{
						"name": "aws step functions",
						"category": "devops"
					}
				],
				"snapshot": true
			},
			{
				"title": "Infrastructure Automation with Terraform",
				"description": "Automated the deployment of AWS infrastructure using Terraform, including Lambda functions, ECR repositories, ECS clusters, S3 buckets, and Step Functions, enabling repeatable and scalable deployments across environments.",
				"skills": [
					{
						"name": "terraform",
						"category": "devops"
					},
					{
						"name": "aws lambda",
						"category": "devops"
					},
					{
						"name": "aws ecr",
						"category": "devops"
					},
					{
						"name": "aws ecs",
						"category": "devops"
					},
					{
						"name": "aws s3",
						"category": "devops"
					},
					{
						"name": "aws step functions",
						"category": "devops"
					}
				],
				"snapshot": true
			},
			{
				"title": "Golang Training for Java and Front-end Teams",
				"description": "Conducted targeted Golang training sessions for Java and Front-end teams, empowering them to independently develop and debug their own Go services, fostering cross-functional collaboration and accelerating feature delivery.",
				"skills": [
					{
						"name": "golang",
						"category": "backend"
					},
					{
						"name": "formation",
						"category": "other"
					}
				],
				"snapshot": true
			}
		]
	},
	{
		"enterprise": "ESGI (Paris & Lyon) - NextU",
		"position": "Lecturer",
		"startDate": new Date("2021-09-01"),
		"endDate": new Date("2024-02-01"),
		"description": "Developed and delivered project-based courses on modern web technologies to Master's students, focusing on Backend development, Microservices architecture, and DevOps practices.",
		"missions": [
			{
				"title": "Microservices Architecture",
				"description": "Led a course on Microservices Architecture where students designed and implemented a gRPC-based Task Manager application using NestJS (for the API Gateway) and Kubernetes for deployment. This project emphasized the challenges of distributed systems, including security, ACID compliance, data consistency, and interoperability.",
				"skills": [
					{
						"name": "nestjs",
						"category": "backend"
					},
					{
						"name": "grpc",
						"category": "devops"
					},
					{
						"name": "kubernetes",
						"category": "devops"
					},
					{
						"name": "docker",
						"category": "devops"
					}
				],
				"snapshot": true
			},
			{
				"title": "Golang Development",
				"description": "Taught a comprehensive course on Golang, covering syntax, interfaces, and robust application development. Students built practical projects, including a RESTful User API with authentication (using GORM) and a real-time chat service, alongside exercises to master asynchronous programming in Go.",
				"skills": [
					{
						"name": "golang",
						"category": "backend"
					},
					{
						"name": "gorm",
						"category": "backend"
					},
					{
						"name": "websocket",
						"category": "backend"
					}
				],
				"snapshot": true
			},
			{
				"title": "CI/CD Pipelines with GitHub Actions",
				"description": "Guided students in building complete CI/CD pipelines using GitHub Actions. Projects included automated testing, building (dev and Docker images), Lighthouse performance scoring, and CD to Vercel with automatic changelog updates and release creation (using Release-it).",
				"skills": [
					{
						"name": "github action",
						"category": "devops"
					},
					{
						"name": "docker",
						"category": "devops"
					},
					{
						"name": "release-it",
						"category": "devops"
					},
					{
						"name": "vercel",
						"category": "devops"
					}
				],
				"snapshot": true
			},
			{
				"title": "Other Courses and Educational Activities",
				"description": "Delivered additional courses and educational activities, including: React, AI Integration (integrating AI models via API), Realtime Web Technologies, Performance Testing, Introduction to HTML & CSS, Docker and Mentoring for student's research papers.",
				"skills": [
					{
						"name": "python",
						"category": "backend"
					},
					{
						"name": "redis",
						"category": "data"
					},
					{
						"name": "websocket",
						"category": "backend"
					},
					{
						"name": "socket.io",
						"category": "backend"
					},
					{
						"name": "webRTC",
						"category": "frontend"
					},
					{
						"name": "reactjs",
						"category": "frontend"
					},
					{
						"name": "docker",
						"category": "devops"
					}
				]
			}
		]
	},
	{
		"enterprise": "Fastory",
		"startDate": new Date("2021-01-01"),
		"endDate": new Date("2021-07-01"),
		"description": "Contributed to the development of a platform for creating micro-sites with chatbots, contests, and analytics dashboards, focusing on backend development and real-time data processing.",
		"position": "Web developer",
		"missions": [
			{
				"title": "Webhook",
				"description": "Developed a high-performance webhook plugin using Node.js and Hapi.js to efficiently retrieve chatbot data, enabling real-time analytics for clients. Focused on optimizing data flow and ensuring reliable data delivery.",
				"skills": [
					{
						"name": "nodejs",
						"category": "backend"
					},
					{
						"name": "hapi",
						"category": "backend"
					},
					{
						"name": "mongodb",
						"category": "data"
					}
				],
				"snapshot": true
			},
			{
				"title": "Real-time Leaderboard",
				"description": "Designed and implemented a real-time leaderboard for contests using Node.js, Hapi.js, and Redis. Focused on building a scalable and low-latency solution to provide participants with up-to-the-minute rankings.",
				"skills": [
					{
						"name": "nodejs",
						"category": "backend"
					},
					{
						"name": "hapi",
						"category": "backend"
					},
					{
						"name": "redis",
						"category": "data"
					}
				],
				"snapshot": true
			},
			{
				"title": "Frontend Improvements",
				"description": "Addressed bug fixes and implemented visual improvements across the site's WYSIWYG editor and analytics dashboard.",
				"skills": [
					{
						"name": "reactjs",
						"category": "frontend"
					}
				]
			}
		]
	},
	{
		"enterprise": "Voc On Steroid",
		"position": "Entrepreneur",
		"startDate": new Date("2020-09-01"),
		"description": "Led the design, development, and deployment of Voconsteroid, a vocabulary learning application, gaining extensive experience in microservices architecture, backend engineering, and DevOps practices. (Currently undergoing redevelopment).",
		"missions": [
			{
				"title": "Microservices Architecture & Design",
				"description": "Architected a resilient microservices ecosystem on GCP, leveraging gRPC for inter-service communication and implementing Kong/Traefik for API routing and reverse proxy functionality. The architecture was designed for scalability, resilience, and independent deployment of services on bare metal servers.",
				"skills": [
					{
						"name": "microservices",
						"category": "devops"
					},
					{
						"name": "grpc",
						"category": "devops"
					},
					{
						"name": "kong",
						"category": "devops"
					},
					{
						"name": "traefik",
						"category": "devops"
					},
					{
						"name": "gcp",
						"category": "system"
					},
					{
						"name": "bare metal",
						"category": "system"
					}
				],
				"snapshot": true
			},
			{
				"title": "Backend Development",
				"description": "Developed key backend services in Go and Node.js, focusing on efficient data handling, API development, and integration with various data stores. Technologies included: MongoDB, MySQL, Elasticsearch, and Sveltekit for the frontend.",
				"skills": [
					{
						"name": "golang",
						"category": "backend"
					},
					{
						"name": "nodejs",
						"category": "backend"
					},
					{
						"name": "mongodb",
						"category": "data"
					},
					{
						"name": "mysql",
						"category": "data"
					},
					{
						"name": "elasticsearch",
						"category": "data"
					},
					{
						"name": "sveltekit",
						"category": "frontend"
					}
				],
				"snapshot": true
			},
			{
				"title": "Logging & Monitoring",
				"description": "Designed and implemented a centralized logging and monitoring solution using the ELK stack (Elasticsearch, Logstash, Kibana). This included creating a custom logging aggregation pipeline for efficient log collection, analysis, and visualization, with a custom-made logging aggregation.",
				"skills": [
					{
						"name": "elasticsearch",
						"category": "data"
					},
					{
						"name": "logstash",
						"category": "data"
					},
					{
						"name": "kibana",
						"category": "data"
					},
					{
						"name": "elk",
						"category": "data"
					}
				],
				"snapshot": true
			},
			{
				"title": "DevOps & Infrastructure",
				"description": "Managed all aspects of application deployment and infrastructure, leveraging Docker, Kubernetes, and GitHub Actions to automate builds, deployments, and scaling. Focused on ensuring high availability, performance, and security, and used Linux and TLS for enhancing security.",
				"skills": [
					{
						"name": "docker",
						"category": "devops"
					},
					{
						"name": "kubernetes",
						"category": "devops"
					},
					{
						"name": "github action",
						"category": "devops"
					},
					{
						"name": "linux",
						"category": "system"
					},
					{
						"name": "tls",
						"category": "devops"
					}
				],
				"snapshot": true
			},
			{
				"title": "Team Management",
				"description": "Managed a small team, prioritizing tasks, and ensuring code quality through Git and Kanban methodologies.",
				"skills": [
					{
						"name": "git",
						"category": "other"
					},
					{
						"name": "kanban",
						"category": "other"
					}
				]
			}
		]
	},
	{
		"enterprise": "Gymglish",
		"position": "Web developer",
		"startDate": new Date("2019-09-01"),
		"endDate": new Date("2020-12-01"),
		"description": "Contributed to the development and maintenance of Gymglish's Studio platform, a course creation platform, focusing on performance optimization and backend development.",
		"missions": [
			{
				"title": "Feature Implementation and Field Creation",
				"description": "Designed, developed, and implemented various functionalities and fields within the Studio platform, enhancing the platform's capabilities and user experience.",
				"skills": [
					{
						"name": "nodejs",
						"category": "backend"
					},
					{
						"name": "express",
						"category": "backend"
					},
					{
						"name": "reactjs",
						"category": "frontend"
					},
					{
						"name": "mongodb",
						"category": "data"
					}
				],
				"snapshot": true
			},
			{
				"title": "CSV Export Optimization",
				"description": "Improved the performance of the CSV export process by parallelizing data processing and optimizing NoSQL queries. Implemented efficient MongoDB aggregations and filters to minimize data retrieval time and accelerate export speeds.",
				"skills": [
					{
						"name": "nodejs",
						"category": "backend"
					},
					{
						"name": "mongodb",
						"category": "data"
					}
				],
				"snapshot": true
			},
			{
				"title": "Rewriting Studio V2",
				"description": "Participated in the recreation of the Studio platform (Studio V2) using Python, Flask, and AngularJS to address performance issues within the WYSIWYG editor and align the technology stack with team expertise. This rewrite focused on improving editor responsiveness and overall platform maintainability.",
				"skills": [
					{
						"name": "python",
						"category": "backend"
					},
					{
						"name": "flask",
						"category": "backend"
					},
					{
						"name": "angularjs",
						"category": "frontend"
					},
					{
						"name": "mongodb",
						"category": "data"
					}
				],
				"snapshot": true
			}
		]
	},
	{
		"enterprise": "Eudonet",
		"position": "Web developer - Internship",
		"startDate": new Date("2018-04-01"),
		"endDate": new Date("2018-07-01"),
		"description": "Contributed to the development of a CRM (Customer Relationship Management) system, focusing on backend logic and algorithm design.",
		"missions": [
			{
				"title": "User Relationship Management",
				"description": "Developed a C# .NET backend system for managing user requests and scheduling, gaining experience with backend logic and algorithm design.",
				"skills": [
					{
						"name": "c# .net",
						"category": "backend"
					}
				]
			}
		]
	},
	{
		"enterprise": "Netapsys Paris",
		"position": "Web developer",
		"startDate": new Date("2016-09-01"),
		"endDate": new Date("2017-07-01"),
		"description": "Contributed to the backend development of government systems, gaining experience in Java J2EE and database management.",
		"missions": [
			{
				"title": "Si-LAV System Development",
				"description": "Contributed to the backend development of the Si-LAV system using Java J2EE, focusing on data management and API integration.",
				"skills": [
					{
						"name": "java j2e",
						"category": "backend"
					}
				]
			}
		]
	}
];
