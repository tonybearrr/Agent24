import React, { Component, Fragment } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Title from '../../../../components/common/Title';
import LandingFeature from '../../LandingFeature';
import SoonIcon from '../../../../assets/SoonIconRounded';
import ProfileFaceRounded from '../../../../assets/ProfileFaceRounded';
import ProtectedIconRounded from '../../../../assets/ProtectedIconRoundd';
import { withSizes } from '../../../../utils/sizes';
import DotNav from '../../../../components/common/DotNav';
import './style.scss';
class LandingMessanger extends Component {
  features = [
    {
      id: 0,
      title: 'СКОРО в Агент24',
      description: `Самые популярные мессенджеры обьединяются в один.
Теперь вы сможете общаться с вашими клиентами прямо в Агент24 через чат-бота любым доступным мессенджером`,
    },
    {
      id: 1,
      title: 'Внутренняя удобная переписка со всем риэлторским сообществом',
      description: `Переписывайтесь между собой, создавайте группы, события и напоминания друг другу`,
    },
    {
      id: 2,
      title: 'Приватность и безопасность',
      description: `Вся ваша клиентская база, деловая переписка, документы и фотографии надежно защищены криптоключами и принадлежат только вам `,
    },
  ];

  state = {
    active: 0,
  };

  handleDotClick = index => {
    this.setState({
      active: index,
    });
  };

  render() {
    const { isDesktop } = this.props;

    const { active } = this.state;

    return (
      <div className="landingMessanger landingPage__block">
        <div className="container">
          <div className="row">
            <Title
              title="Единый мессенджер для деловой переписки"
              description="Telegram, WhatsApp, Viber"
              className="row__col row__col_sm10 row__col_mlsm1 row__col_lg6 row__col_mllg3 landingMessanger__title"
            />
          </div>
          {isDesktop ? (
            <div className="row">
              <div className="row__col row__col_12 row__col_lg5 row__col_xl4 row__col_mlxl7 row__col_mllg6">
                <div className="landingMessanger__item landingMessanger__item_first">
                  <LandingFeature
                    title={
                      <Fragment>
                        <SoonIcon />
                        <span>СКОРО в Агент24</span>
                      </Fragment>
                    }
                    description="Самые популярные мессенджеры обьединяются в один.
  Теперь вы сможете общаться с вашими клиентами прямо в Агент24 через чат-бота любым доступным мессенджером"
                    highlightDisabled
                    className="landingMessanger__feature landingMessanger__feature_first"
                  />
                </div>
                <div className="landingMessanger__item">
                  <LandingFeature
                    title={
                      <Fragment>
                        <ProfileFaceRounded />
                        <span>
                          Внутренняя удобная переписка со всем риэлторским
                          сообществом
                        </span>
                      </Fragment>
                    }
                    description="Переписывайтесь между собой, создавайте группы, события и напоминания друг другу"
                    highlightDisabled
                    className="landingMessanger__feature"
                  />
                </div>
                <div className="landingMessanger__item">
                  <LandingFeature
                    title={
                      <Fragment>
                        <ProtectedIconRounded />
                        <span>Приватность и безопасность</span>
                      </Fragment>
                    }
                    description="Вся ваша клиентская база, деловая переписка, документы и фотографии надежно защищены криптоключами и принадлежат только вам "
                    highlightDisabled
                    className="landingMessanger__feature"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div
                className={`landingMessange__sliderIcons messangerSliderIcons messangerSliderIcons_${active}`}
              >
                <span className="messangerSliderIcons__item">
                  <img src="../../../assets/avatar1.png" alt="person" />
                </span>
                <span className="messangerSliderIcons__item messangerSliderIcons__item_blue">
                  <svg
                    width="25"
                    height="21"
                    viewBox="0 0 25 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.1495 0.00195609C22.8264 0.0160095 22.5221 0.103843 22.2516 0.202217H22.2478C21.9736 0.304104 20.67 0.817055 18.6901 1.59351C16.7102 2.37347 14.1406 3.38532 11.5897 4.39014C6.49537 6.39627 1.48749 8.37077 1.48749 8.37077L1.5476 8.34969C1.5476 8.34969 1.20197 8.45509 0.841315 8.68698C0.65723 8.7994 0.454359 8.95399 0.277788 9.19641C0.101216 9.43884 -0.0415447 9.81125 0.0110517 10.1942C0.0974594 10.8442 0.548281 11.2342 0.87137 11.4485C1.19822 11.6663 1.51003 11.7682 1.51003 11.7682H1.51755L6.21361 13.2473C6.42399 13.8797 7.64497 17.632 7.938 18.4963C8.11082 19.0127 8.27987 19.336 8.49026 19.5819C8.59169 19.7084 8.71191 19.8138 8.85467 19.8981C8.91103 19.9297 8.97114 19.9543 9.03125 19.9754C9.05003 19.9859 9.06881 19.9895 9.09135 19.993L9.04252 19.9824C9.05754 19.9859 9.06881 19.9965 9.08008 20C9.11765 20.0105 9.14395 20.014 9.19279 20.0211C9.93664 20.2319 10.534 19.7997 10.534 19.7997L10.5678 19.7751L13.3404 17.4142L17.9876 20.7483L18.0928 20.7905C19.062 21.1875 20.0426 20.9662 20.561 20.5762C21.0832 20.1827 21.2861 19.6803 21.2861 19.6803L21.3199 19.5995L24.9114 2.39455C25.0129 1.96944 25.0392 1.57243 24.9265 1.18596C24.8138 0.799489 24.5245 0.437613 24.1751 0.244378C23.822 0.0476295 23.4726 -0.0120973 23.1495 0.00195609ZM23.0518 1.84647C23.048 1.90268 23.0593 1.89566 23.033 2.00457V2.01511L19.4753 19.0408C19.4603 19.0654 19.434 19.1181 19.3626 19.1708C19.2874 19.2271 19.2273 19.2622 18.9155 19.1462L13.2314 15.0707L9.79764 17.9974L10.519 13.69C10.519 13.69 19.4227 5.92899 19.8059 5.59522C20.1891 5.26145 20.0614 5.19119 20.0614 5.19119C20.0877 4.78364 19.4828 5.07173 19.4828 5.07173L7.7727 11.856L7.76894 11.8385L2.15621 10.0712V10.0677C2.15245 10.0677 2.14494 10.0642 2.14119 10.0642C2.14494 10.0642 2.17124 10.0537 2.17124 10.0537L2.20129 10.0396L2.23135 10.0291C2.23135 10.0291 7.24298 8.05457 12.3373 6.04844C14.8882 5.04362 17.4579 4.03178 19.434 3.25181C21.4101 2.47536 22.8715 1.9062 22.9541 1.87458C23.033 1.84647 22.9955 1.84647 23.0518 1.84647Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="messangerSliderIcons__item">
                  <img src="../../../assets/avatar2.png" alt="person" />
                </span>
                <span className="messangerSliderIcons__item messangerSliderIcons__item_purple">
                  <svg
                    width="25"
                    height="27"
                    viewBox="0 0 25 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.1777 2.63162C21.5227 2.01437 18.8753 0.0461401 12.9787 0.0194169C12.9787 0.0194169 6.02577 -0.410421 2.6361 2.77462C0.749468 4.70736 0.0855928 7.53451 0.0153338 11.0419C-0.0541224 14.5493 -0.145384 21.1198 6.03949 22.9022L6.04516 22.9038L6.04192 25.6227C6.04192 25.6227 6.00316 26.724 6.70984 26.9478C7.56596 27.22 8.06829 26.383 8.88561 25.4813C9.33466 24.9868 9.95329 24.2596 10.4201 23.7037C14.6505 24.0665 17.9037 23.2343 18.2728 23.1115C19.1273 22.8271 23.9602 22.1936 24.746 15.6231C25.5569 8.84821 24.3527 4.56435 22.1777 2.63162ZM22.9086 15.1335C22.244 20.6205 18.3253 20.9671 17.6033 21.2046C17.2955 21.3056 14.4373 22.0336 10.8449 21.7928L6.95055 26.1107L6.94651 21.1351L6.91582 21.1271C1.68392 19.6388 1.85997 14.0588 1.91893 11.1299C1.9779 8.20102 2.51499 5.80131 4.11168 4.18782C6.97801 1.52793 12.8842 1.9255 12.8842 1.9255C17.8722 1.94811 20.2628 3.48568 20.8168 4.00117C22.6566 5.61555 23.5943 9.47683 22.9086 15.1335Z"
                      fill="white"
                    />
                    <path
                      d="M18.4058 15.9536C18.4033 15.9512 17.6127 15.2766 17.2266 14.9857C16.8624 14.7118 16.2817 14.3433 15.957 14.1559C15.3747 13.8238 14.7795 14.0323 14.534 14.3587L14.0235 15.0156C13.7619 15.3485 13.3589 15.2927 13.2531 15.2709C12.4988 15.0818 11.6968 14.61 10.8762 13.8149C10.0459 13.0127 9.54355 12.1748 9.3643 11.3038L9.35136 11.2464C9.30286 10.8884 9.36266 10.7228 9.50882 10.4788L9.53629 10.4562C9.88115 10.1354 10.5201 9.74518 10.6056 9.37344C10.8568 8.7279 9.76649 7.38185 9.6106 7.14428C9.6106 7.14428 8.81752 6.09391 8.53567 5.89348C8.23115 5.63981 7.75951 5.49516 7.28382 5.78768L7.25958 5.80543C5.89307 6.73055 5.39797 7.26221 5.53284 8.0557L5.6031 8.3748C6.29606 10.5604 7.6343 12.8906 9.62999 14.9655C11.6038 17.0145 13.7392 18.2418 15.844 19.0919C16.3907 19.2737 16.9577 19.1169 17.5392 18.62L17.5489 18.6127C17.9947 18.1958 18.3477 17.7498 18.6109 17.2723L18.6133 17.2626C18.8694 16.7576 18.783 16.2792 18.4058 15.9536Z"
                      fill="white"
                    />
                    <path
                      d="M15.1281 11.1675C15.0449 11.1675 14.9754 11.1005 14.9714 11.0148C14.9439 10.4484 14.7913 10.0145 14.5175 9.72447C14.2454 9.43682 13.8375 9.27607 13.306 9.24694C13.2196 9.24208 13.1526 9.16616 13.1575 9.07728C13.1623 8.98841 13.2358 8.92057 13.323 8.92462C13.9368 8.95853 14.4141 9.15245 14.7436 9.50068C15.0715 9.84809 15.2541 10.3515 15.2856 10.9986C15.2896 11.0875 15.2225 11.1627 15.1362 11.1675H15.1281Z"
                      fill="white"
                    />
                    <path
                      d="M16.6858 11.7012H16.6818C16.5954 11.6987 16.5267 11.6252 16.5284 11.5363C16.5526 10.4488 16.2352 9.52936 15.5842 8.80223C15.2604 8.43941 14.867 8.15266 14.4139 7.94984C13.9601 7.74702 13.4311 7.62183 12.8431 7.57736C12.7567 7.57085 12.6913 7.49336 12.6977 7.40531C12.7042 7.31644 12.7793 7.24936 12.8657 7.2558C14.1208 7.35036 15.1134 7.79711 15.8168 8.58488C16.5235 9.3743 16.8692 10.3704 16.8433 11.5436C16.8409 11.6316 16.7706 11.7012 16.6858 11.7012Z"
                      fill="white"
                    />
                    <path
                      d="M18.2802 12.3379C18.1938 12.3379 18.1236 12.2668 18.1228 12.1779C18.1155 11.2165 17.9709 10.347 17.6915 9.59242C17.4136 8.8434 16.9945 8.1849 16.4453 7.63549C15.8953 7.08684 15.2702 6.66831 14.5869 6.39113C13.902 6.11321 13.1388 5.96945 12.3183 5.96376C12.2318 5.96294 12.1615 5.89024 12.1624 5.80136C12.1632 5.71249 12.2335 5.64136 12.3199 5.64136H12.3206C14.0434 5.65431 15.5043 6.24737 16.665 7.40519C17.2472 7.98694 17.6915 8.68422 17.9854 9.47846C18.2778 10.2678 18.4297 11.176 18.4377 12.1755C18.4385 12.2644 18.3682 12.3371 18.2819 12.3379H18.2802Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="messangerSliderIcons__item">
                  <img src="../../../assets/avatar3.png" alt="person" />
                </span>
                <span className="messangerSliderIcons__item messangerSliderIcons__item_green">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 12.1781C25 18.9039 19.5058 24.3561 12.7272 24.3561C10.5753 24.3561 8.55361 23.8061 6.79472 22.8408L0 25L2.21528 18.4661C1.09778 16.6311 0.454167 14.4789 0.454167 12.1781C0.454167 5.45222 5.94889 0 12.7272 0C19.5064 0 25 5.45222 25 12.1781ZM12.7272 1.93944C7.03722 1.93944 2.40889 6.5325 2.40889 12.1781C2.40889 14.4183 3.13917 16.4931 4.37444 18.1808L3.08528 21.9833L7.05056 20.7231C8.67972 21.7928 10.6314 22.4167 12.7275 22.4167C18.4167 22.4167 23.0458 17.8242 23.0458 12.1786C23.0458 6.53306 18.4169 1.93944 12.7272 1.93944ZM18.9247 14.9828C18.8489 14.8586 18.6486 14.7836 18.3481 14.6344C18.0469 14.4853 16.5675 13.7628 16.2925 13.6636C16.0167 13.5642 15.8156 13.5142 15.6153 13.8128C15.415 14.1117 14.8383 14.7836 14.6625 14.9828C14.4869 15.1825 14.3117 15.2075 14.0106 15.0581C13.71 14.9089 12.7408 14.5933 11.5917 13.5767C10.6975 12.7856 10.0936 11.8089 9.91806 11.5097C9.74278 11.2111 9.89972 11.0497 10.05 10.9011C10.1856 10.7672 10.3511 10.5525 10.5014 10.3783C10.6522 10.2039 10.7022 10.0797 10.8019 9.88028C10.9028 9.68111 10.8525 9.50694 10.7769 9.35722C10.7019 9.20806 10.0997 7.73917 9.84917 7.14139C9.59861 6.54417 9.34833 6.64361 9.1725 6.64361C8.99722 6.64361 8.79639 6.61861 8.59583 6.61861C8.39528 6.61861 8.06917 6.69333 7.79333 6.99194C7.51778 7.29083 6.74083 8.01306 6.74083 9.48167C6.74083 10.9506 7.81833 12.3697 7.96917 12.5686C8.11944 12.7675 10.0497 15.8797 13.1081 17.075C16.1667 18.2697 16.1667 17.8711 16.7183 17.8211C17.2694 17.7714 18.4978 17.0992 18.7494 16.4025C18.9994 15.7047 18.9994 15.1072 18.9247 14.9828Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="messangerSliderIcons__item">
                  <img src="../../../assets/avatar4.png" alt="person" />
                </span>
              </div>
              <SwipeableViews
                index={active}
                onChangeIndex={this.handleDotClick}
                className="landingMessanger__sliderWrapper"
              >
                {this.features.map((feature, index) => (
                  <div
                    className={`
                        landingClientRequestFeatures__item
                        ${
                          index === 0
                            ? 'landingClientRequestFeatures__item_first'
                            : ''
                        }
                      `}
                    style={{
                      transition: index === 0 && 'margin-left 0.5s ease-in-out',
                      marginLeft: index === 0 && `-${active * 100}%`,
                      flexDirection: 'column',
                    }}
                    key={feature.id}
                  >
                    <h5 className="landingMessanger__sliderTitle">
                      {feature.title}
                    </h5>
                    <h6 className="landingMessanger__sliderText">
                      {feature.description}
                    </h6>
                  </div>
                ))}
              </SwipeableViews>
              <DotNav
                total={this.features.length}
                current={active + 1}
                handleChange={this.handleDotClick}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withSizes(LandingMessanger);
