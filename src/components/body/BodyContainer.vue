<template>
    <div class="body">
        <div  v-for="article in articles">
            <article-container :article-data="article"></article-container>
        </div>
    </div>
</template>

<script>
    import ArticleContainer from "./article/ArticleContainer";
    export default {
        name: "BodyContainer",
        components: {ArticleContainer},
        data() {
            return {
                articles: [
                    {
                        title: 'World without cigarette butts',
                        body: '\n' +
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a nisl ac turpis rutrum faucibus sed a velit. Cras gravida mauris quis justo ornare faucibus. Suspendisse lobortis convallis nisi, eget varius lorem pulvinar vel. Vivamus vulputate diam ipsum, non aliquet nibh elementum in. Aliquam nec augue vitae ante ullamcorper ornare. Suspendisse neque libero, facilisis non diam mattis, venenatis eleifend lectus. Aliquam ac tellus interdum, iaculis odio quis, ultrices mi. Nulla vel venenatis turpis, quis venenatis ligula. Pellentesque id semper mi, non egestas urna. Sed fermentum facilisis nisl ut ultricies. Morbi interdum elit eget rhoncus efficitur. Ut mauris odio, convallis at dignissim quis, consectetur id erat. Pellentesque condimentum magna efficitur enim tempor, ornare pretium risus consectetur. Praesent et enim massa. Sed bibendum ipsum eget justo sagittis suscipit. Vestibulum euismod diam egestas, aliquam sapien at, dapibus orci.\n' +
                            '\n' +
                            'Nulla tempus imperdiet nulla ac volutpat. Maecenas commodo augue non erat placerat gravida. Nullam sagittis dui ut fermentum aliquet. Sed a congue risus. Vivamus dapibus dui venenatis metus hendrerit, vitae imperdiet mauris efficitur. Ut elementum nibh nec consectetur convallis. Praesent quis viverra libero, quis viverra felis.\n' +
                            '\n' +
                            'Curabitur dignissim felis vitae tellus luctus elementum. Aliquam cursus mi molestie mollis tincidunt. Nam mauris sapien, efficitur quis mollis in, malesuada nec dolor. Nulla auctor bibendum nunc non ultrices. Cras pulvinar nunc eget sapien interdum, eu volutpat dolor pulvinar. Donec ultricies felis libero. In non mauris varius ligula porta auctor. Vivamus facilisis, arcu eget ullamcorper malesuada, lacus massa pulvinar orci, vel convallis justo ex varius neque. Vivamus at odio non ligula dapibus tempus non bibendum arcu. Praesent tempus porta dui at imperdiet. Morbi hendrerit ex at nisl tristique, ut euismod augue sagittis. Fusce hendrerit congue leo sed phar',
                        image: 'https://images.pexels.com/photos/247040/pexels-photo-247040.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                    },
                    {
                        title: 'Why people will keep cigarette butts',
                        body: '\n' +
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a nisl ac turpis rutrum faucibus sed a velit. Cras gravida mauris quis justo ornare faucibus. Suspendisse lobortis convallis nisi, eget varius lorem pulvinar vel. Vivamus vulputate diam ipsum, non aliquet nibh elementum in. Aliquam nec augue vitae ante ullamcorper ornare. Suspendisse neque libero, facilisis non diam mattis, venenatis eleifend lectus. Aliquam ac tellus interdum, iaculis odio quis, ultrices mi. Nulla vel venenatis turpis, quis venenatis ligula. Pellentesque id semper mi, non egestas urna. Sed fermentum facilisis nisl ut ultricies. Morbi interdum elit eget rhoncus efficitur. Ut mauris odio, convallis at dignissim quis, consectetur id erat. Pellentesque condimentum magna efficitur enim tempor, ornare pretium risus consectetur. Praesent et enim massa. Sed bibendum ipsum eget justo sagittis suscipit. Vestibulum euismod diam egestas, aliquam sapien at, dapibus orci.\n' +
                            '\n' +
                            'Nulla tempus imperdiet nulla ac volutpat. Maecenas commodo augue non erat placerat gravida. Nullam sagittis dui ut fermentum aliquet. Sed a congue risus. Vivamus dapibus dui venenatis metus hendrerit, vitae imperdiet mauris efficitur. Ut elementum nibh nec consectetur convallis. Praesent quis viverra libero, quis viverra felis.\n' +
                            '\n' +
                            'Curabitur dignissim felis vitae tellus luctus elementum. Aliquam cursus mi molestie mollis tincidunt. Nam mauris sapien, efficitur quis mollis in, malesuada nec dolor. Nulla auctor bibendum nunc non ultrices. Cras pulvinar nunc eget sapien interdum, eu volutpat dolor pulvinar. Donec ultricies felis libero. In non mauris varius ligula porta auctor. Vivamus facilisis, arcu eget ullamcorper malesuada, lacus massa pulvinar orci, vel convallis justo ex varius neque. Vivamus at odio non ligula dapibus tempus non bibendum arcu. Praesent tempus porta dui at imperdiet. Morbi hendrerit ex at nisl tristique, ut euismod augue sagittis. Fusce hendrerit congue leo sed phar',
                        image: 'https://images.pexels.com/photos/1131438/pexels-photo-1131438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    },
                    {
                        title: 'Why people will pick up cigarette butts',
                        body: '\n' +
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a nisl ac turpis rutrum faucibus sed a velit. Cras gravida mauris quis justo ornare faucibus. Suspendisse lobortis convallis nisi, eget varius lorem pulvinar vel. Vivamus vulputate diam ipsum, non aliquet nibh elementum in. Aliquam nec augue vitae ante ullamcorper ornare. Suspendisse neque libero, facilisis non diam mattis, venenatis eleifend lectus. Aliquam ac tellus interdum, iaculis odio quis, ultrices mi. Nulla vel venenatis turpis, quis venenatis ligula. Pellentesque id semper mi, non egestas urna. Sed fermentum facilisis nisl ut ultricies. Morbi interdum elit eget rhoncus efficitur. Ut mauris odio, convallis at dignissim quis, consectetur id erat. Pellentesque condimentum magna efficitur enim tempor, ornare pretium risus consectetur. Praesent et enim massa. Sed bibendum ipsum eget justo sagittis suscipit. Vestibulum euismod diam egestas, aliquam sapien at, dapibus orci.\n' +
                            '\n' +
                            'Nulla tempus imperdiet nulla ac volutpat. Maecenas commodo augue non erat placerat gravida. Nullam sagittis dui ut fermentum aliquet. Sed a congue risus. Vivamus dapibus dui venenatis metus hendrerit, vitae imperdiet mauris efficitur. Ut elementum nibh nec consectetur convallis. Praesent quis viverra libero, quis viverra felis.\n' +
                            '\n' +
                            'Curabitur dignissim felis vitae tellus luctus elementum. Aliquam cursus mi molestie mollis tincidunt. Nam mauris sapien, efficitur quis mollis in, malesuada nec dolor. Nulla auctor bibendum nunc non ultrices. Cras pulvinar nunc eget sapien interdum, eu volutpat dolor pulvinar. Donec ultricies felis libero. In non mauris varius ligula porta auctor. Vivamus facilisis, arcu eget ullamcorper malesuada, lacus massa pulvinar orci, vel convallis justo ex varius neque. Vivamus at odio non ligula dapibus tempus non bibendum arcu. Praesent tempus porta dui at imperdiet. Morbi hendrerit ex at nisl tristique, ut euismod augue sagittis. Fusce hendrerit congue leo sed phar',
                        image: 'https://images.pexels.com/photos/1353365/pexels-photo-1353365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
