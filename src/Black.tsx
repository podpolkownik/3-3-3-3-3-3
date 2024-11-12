import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const Black = () => {
  const [headerRef, headerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [contentRef, contentInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const headerAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(-50px)" },
    config: { tension: 280, friction: 20 }
  });

  const contentAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: contentInView ? 1 : 0, transform: contentInView ? "translateY(0)" : "translateY(30px)" },
    config: { tension: 280, friction: 20 }
  });

  return (
    <div style={styles.container}>
      <animated.header ref={headerRef} style={{ ...styles.header, ...headerAnimation }}>
        <animated.img
          src="https://sun9-43.userapi.com/impg/HfPo7K_9AdI_h9xQg6Y_kPifvpllAko9nO7j2g/IJhV7c8S08U.jpg?size=1024x1024&quality=96&sign=b4f568047a9dc8e369b49396d2145d88&type=album"
          alt="Секрет, Который Помог Мне Забыть о Геморрое Раз и Навсегда!"
          style={styles.headerImage}
        />
        <h1 style={styles.title}>Секрет, Который Помог Мне Забыть о Геморрое Раз и Навсегда!</h1>
      </animated.header>

      <animated.section ref={contentRef} style={{ ...styles.content, ...contentAnimation }}>
        <div style={styles.paragraphContainer}>
          {[
            "Долгое время я даже не подозревала, что эта проблема может так испортить жизнь. Геморрой всегда казался чем-то далёким, почти вымышленным, о чём говорят только пожилые люди. Но всё началось неожиданно, с небольшого дискомфорта, который я списывала на сидячую работу и постоянное напряжение. Сначала это было просто лёгкое неудобство, потом — лёгкий зуд и жжение, но вскоре ситуация стала намного хуже. Любая попытка просто посидеть или встать сопровождалась острой болью, и я поняла, что это уже не пройдёт само по себе.",
            "Каждое утро я просыпалась с мыслью о предстоящей боли. Офис, встречи, даже посиделки с друзьями стали превращаться в испытание. Я старалась держаться, но внутри меня росла паника: как долго я смогу ещё это терпеть? Обострения становились всё сильнее, ночами я буквально не находила себе места, не могла ни спать, ни нормально сидеть. На тренировках, которые раньше приносили радость, я теперь еле-еле держалась, а иногда просто пропускала занятия, потому что любое движение вызывало страшный дискомфорт.",
            "Со временем боль стала постоянной спутницей. Я перестала встречаться с друзьями, избегала мероприятий, на работе еле справлялась, и вся моя жизнь как будто сузилась до четырёх стен. Даже поездка на машине или поход в кафе вызывали ужас: мысли о том, что я снова буду вынуждена сидеть, каждый раз выводили меня из себя. Я чувствовала себя заложницей этой проблемы, и от отчаяния мне казалось, что выхода просто нет.",
            "Я пробовала всё: мази, таблетки, народные средства. Сначала казалось, что что-то помогает, но каждый раз облегчение длилось недолго. Дни сменяли друг друга, а я теряла надежду, даже не зная, к кому можно обратиться с такой личной, деликатной проблемой. Однажды я уже была готова сдаться, но решила пойти к врачу — это был последний шанс.",
            "На приёме врач выслушал меня и, оценив моё состояние, порекомендовал Vitacaps. Признаюсь, поначалу я отнеслась к этому средству скептически, как и ко всем другим, которые обещали избавить от моей боли. Но, отчаявшись, я решила рискнуть и начала приём.",
            "Первые дни не принесли особых изменений, и я уже думала, что ошиблась снова. Но через неделю приёма вдруг заметила, что тупая боль, которая преследовала меня столько времени, начала стихать. Жжение прошло, и наконец появилось лёгкое чувство облегчения. Через пару недель я впервые смогла посидеть спокойно — без постоянного страха боли. В этот момент я поняла, что снова смогу вернуться к нормальной жизни.",
            "С тех пор всё изменилось. Я снова начала выходить на прогулки, вернулась к своим тренировкам и даже снова начала встречаться с друзьями. Vitacaps не просто помог мне избавиться от боли — он вернул мне мою жизнь, мои привычки и радость от простых действий, которых я была лишена столько времени. Если бы кто-то сказал мне раньше, что решение существует, я бы избежала множества мучений и отчаяния. Поэтому, если вы сейчас находитесь в похожей ситуации, не терпите. Иногда решение может оказаться ближе, чем мы думаем.",
            "Если вы сейчас в такой же ситуации — не ждите. Проблема может решиться быстрее, чем вы думаете. Не позволяйте боли контролировать вашу жизнь и забирать у вас то, что по праву принадлежит вам — спокойствие, уверенность и радость от каждого дня. Vitacaps стал для меня спасением, и я искренне надеюсь, что он поможет и вам, как помог мне. Возьмите первый шаг к облегчению прямо сейчас."
          ].map((text, index) => (
            <p key={index} style={styles.text}>{text}</p>
          ))}
        </div>
        <animated.img
          src="https://sun9-80.userapi.com/impg/fdY7lBAQhEBWF7bWlNmYUH8Yy9_-XhEEfbpxLQ/jfFo42ZI8oY.jpg?size=1024x1024&quality=96&sign=46d44a6864f672658d4a60ab43d28f54&type=album"
          alt="Статья изображение"
          style={styles.articleImage}
        />
      </animated.section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    backgroundColor: "#ffffff",
    color: "#0a0a0a",
    minHeight: "100vh",
   fontFamily: "'Helvetica Neue', Arial, sans-serif";
    lineHeight: "1.8",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  headerImage: {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
    borderRadius: "20px",
    marginBottom: "30px",
    boxShadow: "0 10px 30px rgba(0, 123, 255, 0.1)",
    transition: "transform 0.5s ease",
    cursor: "pointer",
    ":hover": {
      transform: "scale(1.02)",
    },
  },
  title: {
    fontSize: "2.5em",
    fontWeight: "800",
    background: "linear-gradient(45deg, #2196F3, #00BCD4)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    marginBottom: "30px",
    lineHeight: "1.3",
  },
  content: {
    position: "relative",
    zIndex: "1",
  },
  paragraphContainer: {
    background: "#ffffff",
    borderRadius: "15px",
    padding: "30px",
    marginBottom: "30px",
    boxShadow: "0 8px 32px rgba(0, 123, 255, 0.08)",
  },
  text: {
    margin: "25px 0",
    fontSize: "1.1em",
    color: "#34495e",
    textAlign: "justify",
    letterSpacing: "0.3px",
    transition: "color 0.3s ease",
    lineHeight: "1.8",
  },
  articleImage: {
    width: "100%",
    height: "auto",
    borderRadius: "20px",
    marginTop: "40px",
    boxShadow: "0 15px 30px rgba(0, 123, 255, 0.15)",
    transition: "transform 0.4s ease, opacity 0.4s ease",
    cursor: "pointer",
    ":hover": {
      transform: "scale(1.02)",
    },
  },
};

export default Black;