Need to set up a new amplify project so I can manually 
configure it to connect to an existing dynamoDB instance.
Used `npm create amplify@latest` to create amplify scafolding

├── amplify/
│   ├── auth/
│   │   └── resource.ts
│   ├── data/
│   │   └── resource.ts
│   ├── backend.ts
│   ├── tsconfig.json
│   └── package.json
├── node_modules/
├── .gitignore
├── package-lock.json
├── package.json
└── tsconfig.json


MacBookPro:blog-reader justinbullock$ npm create amplify@latest
Need to install the following packages:
create-amplify@1.2.0
Ok to proceed? (y) y


> npx
> create-amplify

✔ Where should we create your project? .

8:41:44 PM Installing devDependencies:
8:41:44 PM  - @aws-amplify/backend
8:41:44 PM  - @aws-amplify/backend-cli
8:41:44 PM  - aws-cdk-lib@2.189.1
8:41:44 PM  - constructs@^10.0.0
8:41:44 PM  - typescript@^5.0.0
8:41:44 PM  - tsx`
8:41:44 PM  - esbuild

8:41:44 PM Installing dependencies:
8:41:44 PM  - aws-amplify

8:41:44 PM ✔ 8:43:34 PM DevDependencies installed
8:43:34 PM ✔ 8:43:44 PM Dependencies installed
8:43:44 PM ✔ 8:43:45 PM Template files created
8:43:45 PM Successfully created a new project!

8:43:45 PM Welcome to AWS Amplify!
8:43:45 PM  - Get started by running npx ampx sandbox.
8:43:45 PM  - Run npx ampx help for a list of available commands.