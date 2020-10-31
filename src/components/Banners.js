import React, { useState, useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import axios from "../axios-orders";

const useBanners = () => {
    const modes = {
        BACON: 'bacon',
        CHEESE: 'cheese'
    }
    const [mode, setMode] = useState('');
    const [bannerCount, setBannerCount] = useState([]);
    let foo = 0;

    useEffect(() => {
        if(foo === 1) {
            setMode('warning');
        }
    }, [foo])

    useEffect(() => {
		const getData = async () => {
			try {
				const [response] = await Promise.all([
					axios.get(
						"https://burger-generator-cdbeb.firebaseio.com/banner-count.json"
					),
				]);

                setBannerCount(response.data.bacon);
                // console.log(bannerCount);
                // return bannerCount;
                if(response.data.bacon === 0) {
                    return setMode('bacon');
                } else {
                    return setMode('cheese');
                }

			} catch (error) {
				console.log('error')
			}
		};

		getData();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    return {mode, modes};
}

const Banners = (props) => {
    const { mode: bannerMode, modes } = useBanners();
    const isMode = (mode) => mode === bannerMode;
    console.log(bannerMode);
    return (
        <>
        { isMode(modes.CHEESE) &&
                <Alert
                    variant={'warning'}
                    onClose={props.onClose}
                    style={{ borderRadius: 0 }}
                    show={props.show}
                    dismissible
                >
                <p>Cheese</p>
                <div className="d-flex justify-content-end">
          <Button variant="outline-success">
            Close me y'all!
          </Button>
        </div>

            </Alert>
        }
        { isMode(modes.BACON) &&
            <Alert
                variant={'primary'}
                onClose={props.onClose}
                style={{ borderRadius: 0 }}
                show={props.show}
                dismissible
            >Bacon
            </Alert>
        }
        </>
    );
};

export default Banners;