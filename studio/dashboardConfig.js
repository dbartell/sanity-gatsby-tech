export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '607d7e6b01d8c097b680eeb0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-tech-studio',
                  apiId: '4ce4c770-8803-4b37-bc7d-0b58fcd50659'
                },
                {
                  buildHookId: '607d7e6bd14a1fcbd7ba26b7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-tech',
                  apiId: 'f4f59864-1ac4-422a-b207-653e01d46d76'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dbartell/sanity-gatsby-tech',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-tech.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
