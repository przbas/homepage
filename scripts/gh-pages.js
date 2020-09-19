const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/homepage',
    {
        branch: 'gh-page',
        repo: 'https://github.com/przbas/homepage.git',
        user: {
            name: 'przbas',
            email: 'przemyslaw.baskiewicz@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)