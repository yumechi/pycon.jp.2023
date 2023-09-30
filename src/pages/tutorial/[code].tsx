import PageHead from "@/components/elements/PageHead";
import PageTitle from "@/components/elements/PageTitle";
import {Talk} from "@/types/timetable";
import {
  fetchTalks, getTalk, sortTalks,
  SUBMISSION_TYPE_TUTORIAL
} from "@/utils/pretalx";
import {GetStaticPaths, GetStaticProps} from "next";
import {ParsedUrlQuery} from "querystring";
import TutorialLayout from "@/components/organisms/TutorialLayout";
import TalkContent from "@/components/elements/TalkContent";


type Props = {
  tutorial: Talk,
  tutorials: Talk[],
}

const TutorialDetail = ({tutorial, tutorials}: Props) => {
  return (
    <>
      <PageHead/>
      <PageTitle title='Tutorial'/>
      <TutorialLayout tutorials={tutorials}>
        <div className='p-6 border-alt-black bg-secondary-50'>
          <TalkContent talk={tutorial}/>
        </div>
      </TutorialLayout>
    </>
  )
}

interface Params extends ParsedUrlQuery {
  code: string
}

export const getStaticPaths: GetStaticPaths<Params> = (async () => {
  const tutorials = await fetchTalks(SUBMISSION_TYPE_TUTORIAL);
  const paths = tutorials.map(tutorial => {
    return {
      params: {
        code: tutorial.code,
      }
    }
  });

  return {
    paths,
    fallback: false,
  }
})

export const getStaticProps: GetStaticProps<Props, Params> = (async ({params}) => {
  const tutorial = await getTalk(params!.code);
  const tutorials = (await fetchTalks(SUBMISSION_TYPE_TUTORIAL)).sort(sortTalks);

  return {
    props: {
      tutorial,
      tutorials,
    },
  }
});

export default TutorialDetail;
