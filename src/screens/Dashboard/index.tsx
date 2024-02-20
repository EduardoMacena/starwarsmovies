import { FC, useContext, useState } from 'react';
import { Content } from './styles';
import HStackBetween from '../../components/atoms/HStackBetween';
import Header from '../../components/molecules/Header';
import Card from '../../components/organisms/Card';
import StoreContext from '../../data/context/StroreContext';
import { FilmsType } from '../../data/interfaces';
import ButtonHeader from '../../components/molecules/ButtonHeader';
import { replace } from '../../routers/util';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
    const { films } = useContext(StoreContext);
    const [selectedFilm, setSelectedFilm] = useState<FilmsType | null>();

    const _SelectFilm = (film: FilmsType) => {
        setSelectedFilm(film);
    };

    const _GetYearDate = (date: string) => {
        date = date?.split('-')[0];
        return date;
    };

    return (
        <Content>
            <HStackBetween>
                <Header type="dashboard" />
                <ButtonHeader onPress={() => replace('Home')} />
            </HStackBetween>
            {!selectedFilm &&
                films &&
                films.map((film, key) => {
                    const { episode_id, title, director, release_date } = film;
                    const year = _GetYearDate(release_date);
                    return (
                        <Card
                            key={episode_id}
                            episodeId={episode_id}
                            type={key === 0 ? 'image' : 'basic'}
                            title={title}
                            subtitle={director}
                            year={year}
                            onPress={() => {
                                _SelectFilm(film);
                            }}
                        />
                    );
                })}

            {selectedFilm && (
                <Card
                    type={'complete'}
                    episodeId={selectedFilm?.episode_id}
                    info={selectedFilm?.opening_crawl.replace(/(?:\\[rn]|[\r\n]+)+/g, ' ').replace(/\. /g, '.\n\n')}
                    title={selectedFilm?.title}
                    subtitle={selectedFilm?.director}
                    year={_GetYearDate(selectedFilm?.release_date)}
                    onExitPress={() => {
                        setSelectedFilm(null);
                    }}
                />
            )}
        </Content>
    );
};

export default Dashboard;
