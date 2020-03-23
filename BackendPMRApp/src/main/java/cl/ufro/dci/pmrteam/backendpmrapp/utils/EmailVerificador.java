/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.utils;



import cl.ufro.dci.pmrteam.backendpmrapp.FCMInitializer;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;


import org.apache.http.util.EntityUtils;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *
 * @author Gustavo Huerta
 */
public class EmailVerificador {
    
    static Logger logger = LoggerFactory.getLogger(EmailVerificador.class);

    public static boolean verificar(String email) {
        HttpClient client = new DefaultHttpClient();
        String APIKey = "ev-2c84646aefaa948c7bdfbcdca31a1ebc";
        String APIURL = "https://api.email-validator.net/api/verify";

        try {
            HttpPost request = new HttpPost(APIURL);
            List<NameValuePair> Input = new ArrayList<NameValuePair>();
            Input.add(new BasicNameValuePair("EmailAddress", email));
            Input.add(new BasicNameValuePair("APIKey", APIKey));
            request.setEntity(new UrlEncodedFormEntity(Input));
            HttpResponse response = client.execute(request);
            HttpEntity entity = response.getEntity();
            String Output = EntityUtils.toString(entity, "UTF-8");
            JSONParser parser = new JSONParser();
            Object obj = parser.parse(Output);
            JSONObject jsonObject = (JSONObject) obj;
            Long result = (Long) jsonObject.get("status");
            // result 200, 207, 215 - valid
            // result 114 - greylisting, wait 5min and retry
            // result 118 - api rate limit, wait 5min and retry
            // result 3xx/4xx - bad
            if(result == 200 || result == 207 || result == 215){
                return true;
            }else if(result == 114) {
                logger.error("Result 114 - greylisting, wait 5min and retry ");
            }else if(result == 118) {
                logger.error("Resultado 118 - api rate limit, wait 5min and retry");
            } else {
                logger.error("Error bad result");
            }
            String info = (String) jsonObject.get("info");
            logger.info(info);
            String details = (String) jsonObject.get("details");
            logger.info(details);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        } finally {
            client.getConnectionManager().shutdown();
        }
        return false;
    }
}
