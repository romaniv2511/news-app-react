import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchNewsById } from 'services/API';
import { Card, CardMedia, Typography, Container } from '@mui/material';
import styles from './ArticleDetails.module.scss';

const ArticleDetails = () => {
  const [currentNews, setCurrentNews] = useState({});
  const location = useLocation();
  const currentArticleId = +location.pathname.replace('/articles/', '');
  useEffect(() => {
    const getNews = async () => {
      try {
        const currentNews = await fetchNewsById(currentArticleId);
        setCurrentNews(currentNews);
      } catch (error) {
        console.log(error);
      }
    };
    getNews();
  }, [currentArticleId]);
  const { title, summary, imageUrl } = currentNews;
  const currentLocation = useLocation().state?.from ?? '/';

  return (
    <>
      <Card sx={{ height: '245px', mb: '25px' }}>
        <CardMedia
          sx={{ height: '245px' }}
          image={imageUrl}
          title={title}
        ></CardMedia>
      </Card>
      <Container
        sx={{ mt: '-95px', mb: '35px', backgroundColor: '#fff', py: '35px' }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            mb: '50px',
            px: '75px',
            fontSize: '24px',
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ px: '75px' }}>{summary}</Typography>
        <Typography sx={{ px: '75px', mb: '85px' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
          laborum odit quis esse numquam aliquam labore? Blanditiis assumenda
          fuga, iure, dolores veniam similique doloremque voluptatibus
          voluptatum quasi aliquid incidunt ipsa ad. Fugiat esse hic qui
          repellat impedit maiores quasi quo explicabo ipsum sapiente temporibus
          pariatur, eveniet debitis consequatur. Aperiam fugit eum iure autem
          illo est voluptatibus sed qui repellat nobis repellendus iste unde
          temporibus, consequatur quia quaerat eveniet sunt quibusdam, voluptas
          nihil aut ratione dolor amet. Natus iusto facilis perferendis ipsum
          ullam officiis saepe laboriosam pariatur maiores vitae necessitatibus,
          reiciendis nemo fugiat praesentium recusandae exercitationem esse
          dolore mollitia, ipsam enim fugit assumenda aperiam vel. Illum
          consectetur ipsa quasi nisi doloremque eius obcaecati, totam vel, qui
          autem adipisci dolores nostrum, molestiae ab dolore maiores. Adipisci
          ipsum inventore est ad facere nulla aliquam pariatur esse optio
          sapiente accusantium molestias praesentium ullam deserunt laborum
          dignissimos obcaecati laudantium iure, incidunt recusandae autem non
          fuga! Libero odio numquam dolorum sed deleniti accusamus sunt enim
          quibusdam. Totam cumque at beatae explicabo fugiat ratione vel libero
          rem praesentium et voluptatibus enim obcaecati aliquam aliquid,
          maxime, voluptatum numquam dolorum. Culpa est ea temporibus aperiam
          doloribus iste error. Libero atque recusandae accusamus expedita iusto
          fuga distinctio voluptate similique corporis nobis porro, nulla itaque
          ex nostrum quidem, mollitia nemo, exercitationem non obcaecati ducimus
          odit enim tempora. Harum, velit non sequi quisquam enim eveniet vitae
          fugiat mollitia optio labore earum officia expedita, ut consectetur
          sapiente. Quo assumenda repellendus iusto fuga officiis? Fugit,
          provident reiciendis fugiat exercitationem blanditiis voluptates
          dolorem quidem asperiores amet consequatur animi, ipsam numquam
          laboriosam sapiente nisi quae repellendus repudiandae. Earum sequi
          commodi optio magnam iste itaque maiores, non veniam sit explicabo
          molestiae illo assumenda eos labore numquam fugit deleniti saepe alias
          debitis harum deserunt molestias laborum nemo? Tenetur est ducimus
          totam unde facere reiciendis aut sit sunt? Labore quis, dolores,
          aperiam doloremque illum unde at explicabo maxime incidunt molestias
          magni dolore soluta omnis architecto delectus, natus numquam ad cum
          cupiditate laboriosam expedita possimus quae! Quos perspiciatis ullam
          distinctio. Nihil voluptatem rem sed modi possimus itaque consectetur
          iure enim ipsum, repudiandae tempore at qui amet quis quos tempora
          reprehenderit quod quae voluptates placeat! Repellendus nemo sint
          placeat sit praesentium officia, asperiores est iure in quaerat, minus
          rem cum, itaque quidem sapiente? Quo repellendus cumque maxime
          adipisci nesciunt praesentium incidunt perferendis veniam odit vero
          officia ipsam quis voluptatem nulla rem quidem tenetur, maiores nihil
          mollitia, deserunt cum culpa ea eius?
        </Typography>
        <Link to={currentLocation} className={styles.link}>
          &#129044; Back to homepage
        </Link>
      </Container>
    </>
  );
};

export default ArticleDetails;
